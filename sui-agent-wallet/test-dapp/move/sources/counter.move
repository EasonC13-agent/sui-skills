/// Simple counter module for testing Sui Agent Wallet
module counter::counter;

/// A shared counter object that anyone can increment
public struct Counter has key {
    id: UID,
    value: u64,
    owner: address,
}

/// Create a new shared counter
public fun create(ctx: &mut TxContext) {
    let counter = Counter {
        id: object::new(ctx),
        value: 0,
        owner: ctx.sender(),
    };
    transfer::share_object(counter);
}

/// Increment the counter by 1
public fun increment(counter: &mut Counter) {
    counter.value = counter.value + 1;
}

/// Increment the counter by a specific amount
public fun increment_by(counter: &mut Counter, amount: u64) {
    counter.value = counter.value + amount;
}

/// Reset the counter to 0 (only owner)
public fun reset(counter: &mut Counter, ctx: &TxContext) {
    assert!(counter.owner == ctx.sender(), 0);
    counter.value = 0;
}

/// Get the current value
public fun value(counter: &Counter): u64 {
    counter.value
}

#[test]
fun test_counter() {
    use sui::test_scenario;
    
    let owner = @0xCAFE;
    let mut scenario = test_scenario::begin(owner);
    
    // Create counter
    {
        create(scenario.ctx());
    };
    
    // Increment
    scenario.next_tx(owner);
    {
        let mut counter = scenario.take_shared<Counter>();
        increment(&mut counter);
        assert!(value(&counter) == 1, 0);
        increment_by(&mut counter, 5);
        assert!(value(&counter) == 6, 1);
        test_scenario::return_shared(counter);
    };
    
    scenario.end();
}
