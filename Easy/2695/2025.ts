/*
 * Runtime 52 ms Beats 70.55%
 * Memory 57.61 MB Beats 11.01%
 */
class ArrayWrapper {
    storage: number[]
    constructor(nums: number[]) {
        this.storage = [...nums];
    }
    
    valueOf(): number {
        let result = 0;
        for (let i = 0; i < this.storage.length; i++) {
            result += this.storage[i]
        }
        return result;
    }
    
    toString(): string {
        return `[${this.storage.toString()}]`;
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */