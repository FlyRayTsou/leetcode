/*
 * Runtime 39 ms Beats 95.33%
 * Memory 54.60 MB Beats 24.73%
 */
class Calculator {
    result: number
    constructor(value: number) {
        this.result = value
    }
    
    add(value: number): Calculator {
        this.result = this.result + value
        return this
    }
    
    subtract(value: number): Calculator {
        this.result = this.result - value
        return this
    }
    
    multiply(value: number): Calculator {
        this.result = this.result * value
        return this
    }
    
    divide(value: number): Calculator {
        if (value === 0) {
            throw new RangeError("Division by zero is not allowed")
        }
        this.result = this.result / value
        return this
    }
    
    power(value: number): Calculator {
        this.result = Math.pow(this.result, value)
        return this
    }
    
    getResult(): number {
        return this.result;
    }
}