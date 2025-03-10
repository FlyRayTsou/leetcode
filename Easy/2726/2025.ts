/*
 * Runtime 46 ms Beats 82.74%
 * Memory 55.13 MB Beats 23.17%
 */
class Calculator {
    result: number
    constructor(value: number) {
        this.result = value
    }
    
    add(value: number): Calculator {
        return new Calculator(this.result + value)
    }
    
    subtract(value: number): Calculator {
        return new Calculator(this.result - value)
    }
    
    multiply(value: number): Calculator {
        return new Calculator(this.result * value)
    }
    
    divide(value: number): Calculator {
        if (value === 0) {
            throw new Error("Division by zero is not allowed")
        }
        return new Calculator(this.result / value)
    }
    
    power(value: number): Calculator {
        return new Calculator(Math.pow(this.result, value))
    }
    
    getResult(): number {
        return this.result;
    }
}