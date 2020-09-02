// 给定一个包含非负整数的 m x n 网格， 请找出一条从左上角到右下角的路径， 使得路径上的数字总和为最小。

// 说明： 每次只能向下或者向右移动一步。

// 示例:

//     输入: [
//         [1, 3, 1],
//         [1, 5, 1],
//         [4, 2, 1]
//     ]
// 输出: 7
// 解释: 因为路径 1→ 3→ 1→ 1→ 1 的总和最小。

// 来源： 力扣（ LeetCode）
// 链接： https://leetcode-cn.com/problems/minimum-path-sum

// 1.确定状态，dp[i][j]走到当前格子路径和的最小值
// 2.状态转移，题意中机器人只能每次往下走异步或者往右走一步，那么dp[i][j]这个格子必然是从dp[i-1][j]或者dp[i][j-1]走过来的，
// 而且统计最小的路径和，可知dp[i][j]=Min(dp[i-1][j]+grid[i][j],dp[i][j-1]+grid[i][j])

// 思考过程：问题是要知道到达右下角的最小路径和，又由于机器人只能每次往下走异步或者往右走一步，
// 那么dp[i][j]这个格子必然是从dp[i-1][j]或者dp[i][j-1]走过来的，所以子问题是求出dp[i-1][j]和dp[i][j-1]的最小路径和，由此可得知状态转移方程

// 3.考虑初始化，容易得知，第一行和第一列的路径和前一个的累加，如按上图所示dp[0][0]=1,dp[0][1]=4,dp[1][0]=1,dp[1][1]=2以此类推
// 4.将子问题自底向上递推即可得知到达dp[m][n]的这个格子最小的路径和

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]) {
    const m = grid.length
    const n = grid[0].length

    const dp = [
        [grid[0][0]]
    ]

    for (let i = 1; i < m; i++) {
        dp[i] = []
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
        }
    }

    return dp[m - 1][n - 1]
};

minPathSum()