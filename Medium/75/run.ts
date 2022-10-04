// Runtime: 141 ms, faster than 5.56% of TypeScript online submissions for Sort Colors.
// Memory Usage: 42.5 MB, less than 95.06% of TypeScript online submissions for Sort Colors.
function sortColors(nums: number[]): void {
    let count = 1;
    while (count < nums.length) {
        for (let i = 0; i < nums.length-count; i++) {
            if (nums[i] > nums[i+1]) {
                let temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
            }
        }
        count++;
    }
};


// Runtime: 98 ms, faster than 60.18% of TypeScript online submissions for Sort Colors.
// Memory Usage: 42.7 MB, less than 91.05% of TypeScript online submissions for Sort Colors.
function sortColors2(nums: number[]): void {
    let hashMap = new Map([
        [0, 0],
        [1, 0],
        [2, 0],
    ]);
    for (let i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], hashMap.get(nums[i])+1);
    }
    for (let i = 0; i < nums.length; i++) {
        const assignVal = hashMap.get(0) > 0 ? 0 : hashMap.get(1) > 0 ? 1 : 2;
        nums[i] = assignVal;
        hashMap.set(assignVal, hashMap.get(assignVal)-1);
    }
};

// Runtime: 110 ms, faster than 37.96% of TypeScript online submissions for Sort Colors.
// Memory Usage: 44.2 MB, less than 27.47% of TypeScript online submissions for Sort Colors.
function sortColors3(nums: number[]): void {
    let left = 0;
    let right = nums.length-1;
    let current = 0;
    while (current <= right) {
        switch (nums[current]) {
            case 0:
                swap(left, current, nums);
                left++;
                current++;
                break;
            case 1:
                current++;
                break;
            case 2:
                swap(right, current, nums);
                right--;
                break;
        }
    }
};
function swap(a: number, b: number, nums: number[]): void {
    [nums[b], nums[a]] = [nums[a], nums[b]]
}