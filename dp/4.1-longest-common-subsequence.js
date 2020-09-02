// 给定两个字符串 text1 和 text2， 返回这两个字符串的最长公共子序列的长度。

// 一个字符串的 子序列 是指这样一个新的字符串： 它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（ 也可以不删除任何字符） 后组成的新字符串。
// 例如， "ace"
// 是 "abcde"
// 的子序列， 但 "aec"
// 不是 "abcde"
// 的子序列。 两个字符串的「 公共子序列」 是这两个字符串所共同拥有的子序列。

// 若这两个字符串没有公共子序列， 则返回 0。



// 示例 1:

//     输入： text1 = "abcde", text2 = "ace"
// 输出： 3
// 解释： 最长公共子序列是 "ace"，
// 它的长度为 3。
// 示例 2:

//     输入： text1 = "abc", text2 = "abc"
// 输出： 3
// 解释： 最长公共子序列是 "abc"，
// 它的长度为 3。
// 示例 3:

//     输入： text1 = "abc", text2 = "def"
// 输出： 0
// 解释： 两个字符串没有公共子序列， 返回 0。


// 提示:

//     1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// 输入的字符串只含有小写英文字符。

// 来源： 力扣（ LeetCode）
// 链接： https://leetcode-cn.com/problems/longest-common-subsequence

// 1.确定状态，涉及到两个字符串的比较，容易得知，设置ij两个维度即可消除后效性，dp[i][j]定义是当前格子下子字符串text1I与test2J的最长公共子序列长度
// 2.状态转移，我们知道两个公共子序列的字符必然相同，那么text1[i]==text2[j]时，最长公共子序列的长度可增加1，可推出，转移方程
// dp[i][j] = Max(
//     dp[i - 1][j],
//     dp[i][j-1],
// )
// i==j dp[i][j]=dp[i-1][j-1]+1
// 思考过程：问题是要知道到达右下角的最小路径和，又由于机器人只能每次往下走异步或者往右走一步，
// 那么dp[i][j]这个格子必然是从dp[i-1][j]或者dp[i][j-1]走过来的，所以子问题是求出dp[i-1][j]和dp[i][j-1]的最小路径和，由此可得知状态转移方程

// 3.考虑初始化，容易得知，第一行和第一列的路径和前一个的累加，如按上图所示dp[0][0]=1,dp[0][1]=4,dp[1][0]=1,dp[1][1]=2以此类推
// 这里同理， 涉及到两个一维的序列时， 可将问题装换
// grid = [
//     [' ', 'a ', 'c ', 'e '],
//     ['a', 'aa', 'ac', 'ae'],
//     ['b', 'ba', 'bc', 'be'],
//     ['c', 'ca', 'cc', 'ce'],
//     ['d', 'da', 'dc', 'de'],
//     ['e', 'ea', 'ec', 'ee']
// ]
// 容易得知：dp[0][0]=0,dp[0][1]=0,dp[0][2]=0,dp[1][0]=0,dp[2][0]=0
// 4.将子问题自底向上递推即可得知到达dp[m][n]的这个格子最长公共子序列长度

// "bsbininm"
// "jmjkbkjkv"

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1 = 'accc', text2 = 'ac') {
    const m = text1.length
    const n = text2.length
    const dp = []
    for (let i = 0; i <= m; i++) {
        dp[i] = [0]
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = 0
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = Math.max(
                dp[i - 1][j],
                dp[i][j - 1],
                // dp[i-1][j-1]
            )
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
        }
    }
    console.log(dp);
    return dp[m][n]
};
longestCommonSubsequence()