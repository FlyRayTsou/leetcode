/*
 * Time Limit Exceeded
 * 48 / 52 testcases passed
 */
function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
    let result: boolean = false;
    let isEnd: boolean = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <= i+indexDiff; j++) {
            if (j >= nums.length) break;
            if (Math.abs(nums[i]- nums[j]) > valueDiff) {
                continue;
            }
            result = true;
            isEnd = true;
        }
        if (isEnd) {
            break;
        }
    }
    return result;
};

/*
 * Runtime 205 ms Beats 33.33%
 * Memory 77.30 MB Beats 52.38%
 */
function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
    let result: boolean = false;
    let isEnd: boolean = false;
    const bucket = [];
    let bucketSize: number = 0;
    for (let i = 0; i < nums.length; i++) {
        const bucketNum = valueDiff === 0 ? nums[i] : Math.floor(nums[i]/valueDiff)
        if (bucket[bucketNum] !== undefined) {
            result = true;
            break;
        } else {
            if (valueDiff !== 0 && bucket[bucketNum+1] !== undefined) {
                for (let value of bucket[bucketNum+1]) {
                    if (Math.abs(value-nums[i])<=valueDiff) {
                        return true
                    }
                }
            }
            if (valueDiff !== 0 && bucket[bucketNum-1] !== undefined) {
                for (let value of bucket[bucketNum-1]) {
                    if (Math.abs(value-nums[i])<=valueDiff) {
                        return true
                    }
                }
            }
            bucket[bucketNum] = [nums[i]]
            bucketSize++
        }
        if (bucketSize > indexDiff) {
            const previouseBucketNum = valueDiff === 0 ? nums[i-indexDiff] : Math.floor(nums[i-indexDiff]/valueDiff)
            if (bucket[previouseBucketNum] !== undefined && bucket[previouseBucketNum].length <= 1) {
                delete bucket[previouseBucketNum]
            } else {
                if (bucket[previouseBucketNum]) {
                    const index = bucket[previouseBucketNum].indexOf(nums[i - indexDiff]);
                    if (index !== -1) {
                        bucket[previouseBucketNum].splice(index, 1);
                        bucketSize--
                    }
                }
            }
        }
    }
    return result;
};

/*
 * Reference
 * https://leetcode.com/problems/contains-duplicate-iii/solutions/824578/c-o-n-time-complexity-explained-buckets-o-k-space-complexity/
 */