// 你是一个专业的小偷， 计划偷窃沿街的房屋。 每间房内都藏有一定的现金， 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统， 如果两间相邻的房屋在同一晚上被小偷闯入， 系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组， 计算你 不触动警报装置的情况下， 一夜之内能够偷窃到的最高金额。



// 示例 1：

// 输入：[1, 2, 3, 1]
// 输出： 4
// 解释： 偷窃 1 号房屋(金额 = 1)， 然后偷窃 3 号房屋(金额 = 3)。
// 偷窃到的最高金额 = 1 + 3 = 4。
// 示例 2：

// 输入：[2, 7, 9, 3, 1]
// 输出： 12
// 解释： 偷窃 1 号房屋(金额 = 2), 偷窃 3 号房屋(金额 = 9)， 接着偷窃 5 号房屋(金额 = 1)。
// 偷窃到的最高金额 = 2 + 9 + 1 = 12。


// 提示：

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400

// 来源： 力扣（LeetCode）
// 链接： https://leetcode-cn.com/problems/house-robber

// 1.定义状态：明显这里只要一个维度即可消除后效性，dp[i]的值定义为在到达i时所得的最高金额
// 2.定义转移方程：容易得知，dp[i]必然是从dp[i-1]或者dp[i-2]转移过来的，而从dp[i-1]过来的话，当前房屋不能偷，从dp[i-2]过来的话，当前房屋可以偷
// 那么，
// dp[i] = Max(
//     dp[i - 1],
//     dp[i - 2] + nums[i]
// )
// 3.考虑初始化，容易得知0间房屋时，dp[0]=0，1间房屋时dp[1]=nums[1]
// 4.递推结果，自底向上递推得出dp[n]即是答案

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums = [2, 7, 9, 3, 1]) {
    if (nums.length < 1) return 0
    const n = nums.length
    const dp = [0, nums[0]]
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.max(
            dp[i - 1],
            dp[i - 2] + nums[i - 1]
        )
    }
    // console.log(dp);
    return dp[n]
};
rob()