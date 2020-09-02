// 给定一个无序的整数数组， 找到其中最长上升子序列的长度。

// 示例:

//     输入: [10, 9, 2, 5, 3, 7, 101, 18]
// 输出: 4
// 解释: 最长的上升子序列是[2, 3, 7, 101]， 它的长度是 4。
// 说明:

//     可能会有多种最长上升子序列的组合， 你只需要输出对应的长度即可。
// 你算法的时间复杂度应该为 O(n2)。
// 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗 ?

//     来源： 力扣（ LeetCode）
// 链接： https://leetcode-cn.com/problems/longest-increasing-subsequence

const a1 = [10, 9, 2, 5, 3, 7, 101, 18]
const a2 = [4, 10, 4, 3, 8, 9]

function lis(nums) {
    if (!nums.length) return 0
    const dp = []
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1
    }

    for (let i = 0; i < nums.length; i++) {
        let count = dp[i]
        const numI = nums[i];
        for (let j = 0; j < i; j++) {
            const numJ = nums[j];
            if (numJ < numI && dp[j] + 1 > count) {
                count = dp[j] + 1
            }
        }
        dp[i] = count
    }
    // console.log(dp);
    return Math.max(...dp)
}
lis(a2)

function lis2(nums) {
    if (!nums.length) return 0
    const dp = []
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1
    }
    for (let i = 0; i < nums.length; i++) {
        const numI = nums[i];
        for (let j = 0; j < i; j++) {
            const numJ = nums[j];
            if (numI > numJ) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}