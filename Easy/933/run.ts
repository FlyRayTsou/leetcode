/*
 * Runtime: 199 ms Beats 59.77%
 * Memory: 64.02 MB Beats 43.41%
 */
class RecentCounter {
    private count = 0;
    private queue: number[] = [];
    constructor() {
    }

    ping(t: number): number {
        this.queue.push(t)
        while(this.queue[0] < t-3000) {
            this.queue.shift()
        }
        return this.queue.length
    }
}

/*
 * Runtime: 184 ms Beats 85.91%
 * Memory: 65.37 MB Beats 19.09%
 */
import { Queue, NodeItem } from '../../DataStructures/Queue'
class RecentCounter2 {
    private queue;
    constructor() {
        this.queue = new Queue(null)
    }

    ping(t: number): number {
        this.queue.enqueue(new NodeItem(t))
        while(this.queue.size > 0 && this.queue.head!.val < t-3000) {
            this.queue.dequeue()
        }
        return this.queue.size
    }
}
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // requests = [1], range is [-2999,1], return 1
console.log(recentCounter.ping(100));   // requests = [1, 100], range is [-2900,100], return 2
console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001], range is [1,3001], return 3
console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

const recentCounter2 = new RecentCounter2();
console.log(recentCounter2.ping(1));     
console.log(recentCounter2.ping(100));   
console.log(recentCounter2.ping(3001));  
console.log(recentCounter2.ping(3002));  
