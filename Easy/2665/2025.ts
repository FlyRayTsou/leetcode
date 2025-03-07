/*
 * Runtime 58 ms Beats 71.02% 
 * Memory 58.28 MB Beats 16.51%
 */
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let counter = init;
    return {
        increment: function() {
            counter++;
            return counter;
        },
        decrement: function() {
            counter--;
            return counter;
        },
        reset: function() {
            counter = init
            return counter;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */