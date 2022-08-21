// Runtime: 9911 ms, faster than 5.48% of TypeScript online submissions for Sort an Array.
// Memory Usage: 56.3 MB, less than 66.44% of TypeScript online submissions for Sort an Array.
function bubbleSort(nums: number[]): number[] {
    let endIndex = nums.length-2;
    let swapTimes = 1;
    while(endIndex >= 0 && swapTimes > 0) {
        swapTimes = 0;
        for (let j = 0; j <= endIndex; j++) {
            if (nums[j] > nums[j+1]) {
                const temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                swapTimes++;
            }
        }
        endIndex--;
    }
    return nums;
};


// Runtime: 4812 ms, faster than 12.33% of TypeScript online submissions for Sort an Array.
// Memory Usage: 53.7 MB, less than 77.40% of TypeScript online submissions for Sort an Array.
function selectionSort(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;
        let min = nums[i];
        for (let j = i; j < nums.length; j++) {
            if (min > nums[j]) {
                min = nums[j];
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = nums[i];
            nums[minIndex] = temp;
            nums[i] = min;
        }
    }
    return nums;
};


// Quick Sort Pivot the latest
// Runtime: 4893 ms, faster than 12.33% of TypeScript online submissions for Sort an Array.
// Memory Usage: 60.8 MB, less than 42.47% of TypeScript online submissions for Sort an Array.
function sortArray(nums: number[]): number[] {
    quickSort(nums, 0, nums.length-1);
    return nums;
};

function quickSort(arr: number[], left: number, right: number) {
    if (left >= right) return;
    const i = partition(arr, left, right);
    quickSort(arr, left, i-1);
    quickSort(arr, i+1, right);
}

function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right];
    let i = left-1;
    for (let l = left; l < right; l++) {
        if (arr[l] < pivot) {
            i++;
            swap(arr, i, l);
        }
    }
    swap(arr, i+1, right);
    return i+1;
}

function swap(arr: number[], left: number, right: number): void {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}