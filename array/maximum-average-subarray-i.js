// 给定 n 个整数， 找出平均数最大且长度为 k 的连续子数组， 并输出该最大平均数。

// 示例 1:

//     输入: [1, 12, -5, -6, 50, 3], k = 4
// 输出: 12.75
// 解释: 最大平均数(12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


// 注意:

//     1 <= k <= n <= 30, 000。
// 所给数据范围[-10, 000， 10, 000]。

// 来源： 力扣（ LeetCode）
// 链接： https://leetcode-cn.com/problems/maximum-average-subarray-i

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let left = 0
    let right = k
    let max = -Infinity
    for (let i = 0; i <= nums.length - k; i++) {
        const itemMax = nums.slice(left, right).reduce((a, b) => a + b)
        if (itemMax > max) max = itemMax
        left++
        right++
    }
    return max / k
};

findMaxAverage([1, 12, -5, -6, 50, 3], 4)