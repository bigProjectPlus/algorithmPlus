const a1 = [5, 4, 7, 1, 2, 9, 3, 10, 0, 6]
const a2 = [2, 1]

function findKey(nums, low, high) {
    let left = low
    const keyItem = nums[low]

    for (let i = low + 1; i <= high; i++) {
        const item = nums[i];
        if (item < keyItem) {
            left++
            const con = nums[i]
            nums[i] = nums[left]
            nums[left] = con
        }
    }
    // 最后与key位置对调一下
    const con = nums[low];
    nums[low] = nums[left];
    nums[left] = con;
    return left
}

// var left = findKey(a1, 0, a1.length - 1)
// console.log(a1, left);

/**
 * 快速排序，内排序，平均时间复杂度N*Log(N)
 *
 * @param {*} nums
 * @param {number} [left=0]
 * @param {*} [right=nums.length - 1]
 */
function quickSort(nums, left = 0, right = nums.length - 1) {
    if (left < right) {
        const mid = findKey(nums, left, right)
        quickSort(nums, left, mid - 1)
        quickSort(nums, mid + 1, right)
    }
}

quickSort(a1)

console.log(a1);