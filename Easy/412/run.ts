// Runtime: 124 ms, faster than 30.22% of TypeScript online submissions for Fizz Buzz.
// Memory Usage: 45.4 MB, less than 38.34% of TypeScript online submissions for Fizz Buzz.
function fizzBuzz(n: number): string[] {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
};