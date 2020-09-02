// 一个机器人位于一个 m x n 网格的左上角（ 起始点在下图中标记为“ Start”）。

// 机器人每次只能向下或者向右移动一步。 机器人试图达到网格的右下角（ 在下图中标记为“ Finish”）。

// 问总共有多少条不同的路径？

// 例如， 上图是一个7 x 3 的网格。 有多少可能的路径？

// 示例 1:

// 输入: m = 3, n = 2
// 输出: 3
// 解释:
//     从左上角开始， 总共有 3 条路径可以到达右下角。
// 1. 向右 - > 向右 - > 向下
// 2. 向右 - > 向下 - > 向右
// 3. 向下 - > 向右 - > 向右
// 示例 2:

// 输入: m = 7, n = 3
// 输出: 28

// 提示：
// 1 <= m, n <= 100
// 题目数据保证答

// 来源： 力扣（ LeetCode）
// 链接： https: //leetcode-cn.com/problems/unique-paths

// 1.确定状态，dp[i][j]是走到当前格子的路径总数
// 2.状态转移，题意中机器人只能每次往下走异步或者往右走一步，dp[i][j]这个格子必然是从dp[i-1][j]或者dp[i][j-1]走过来的，可知dp[i][j]=dp[i-1][j]+dp[i][j-1]
// 3.考虑初始化，容易得知，dp[0][0]=1，第一行和第一列的路径总数都为1，如dp[0][1]=1,dp[0][2]=1,dp[1][0]=1,dp[2][0]=1以此类推
// 4.自底向上递推即可得知到达dp[m][n]的这个格子的路径总数

function roobInGrid(m, n) {
    let dp = []
    for (let i = 0; i < m; i++) {
        dp[i] = [1]
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    if (m == 1) return dp[m - 1][n - 1]
    if (n == 1) return dp[m - 1][n - 1]

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    // console.log(dp);
    return dp[m - 1][n - 1]
}

roobInGrid(7, 3)