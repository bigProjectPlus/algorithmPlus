const a1 = [5, 4, 7, 1, 2, 9, 3]
const a2 = [2, 1]

// 两路归并
function mergeNums(nums1, nums2) {
    let left = 0
    let right = 0
    const res = []
    while (left < nums1.length || right < nums2.length) {
        // 判断边界条件
        const itemLeft = nums1[left] == undefined ? Infinity : nums1[left]
        const itemRight = nums2[right] == undefined ? Infinity : nums2[right]

        if (itemLeft <= itemRight) {
            res.push(nums1[left])
            left++
        } else {
            res.push(nums2[right])
            right++
        }
    }
    return res
}

/**
 * 归并排序，外排序，时间复杂度N*Log(N)
 * 
 * 1. 二分切割
 * 2. 归并重组
 *
 * @param {*} nums
 * @param {number} [left=0]
 * @param {*} [right=nums.length - 1]
 * @returns
 */
function mergeSort(nums, left = 0, right = nums.length - 1) {
    const mid = Math.ceil(left + (right - left) / 2)
    const numsLeft = nums.slice(left, mid)
    const numsRight = nums.slice(mid, right + 1)
    console.log('d', numsLeft, numsRight);
    let resL = numsLeft
    let resR = numsRight
    if (left < right) {
        resL = mergeSort(numsLeft)
        resR = mergeSort(numsRight)
    }
    console.log('g', numsLeft, numsRight);
    return mergeNums(resL, resR)
}

mergeSort([0, 2, 1])
// mergeSort([1, 3, 9, 2, 5, 7])