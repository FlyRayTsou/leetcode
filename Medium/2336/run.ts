/*
 * Runtime 123 ms Beats 72.94% of users with TypeScript
 * Memory 58.94 MB Beats 90.59% of users with TypeScript
 */
class SmallestInfiniteSet {
    firstIndex: number = 0
    queue: number[] = []
    constructor() {
        for (let i = 1; i <= 1000; i++) {
            this.queue.push(i)
        }
    }

    popSmallest(): number {
        const smallestNum: number = this.queue[this.firstIndex]
        this.queue[this.firstIndex] = -1
        for(let i = this.firstIndex+1; i <= 1000; i++) {
            if (this.queue[i] !== -1) {
                this.firstIndex = i
                break;
            }
        }
        return smallestNum
    }

    addBack(num: number): void {
        if (this.queue[num-1] === -1) {
            this.queue[num-1] = num
        }
        if (num-1 < this.firstIndex) {
            this.firstIndex = num-1
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */