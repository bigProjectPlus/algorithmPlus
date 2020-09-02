// 给你两个单词 word1 和 word2， 请你计算出将 word1 转换成 word2 所使用的最少操作数。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符

// 示例 1：

// 输入： word1 = "horse", word2 = "ros"
// 输出： 3
// 解释：
// horse - > rorse(将 'h'
//     替换为 'r')
// rorse - > rose(删除 'r')
// rose - > ros(删除 'e')
// 示例 2：

// 输入： word1 = "intention", word2 = "execution"
// 输出： 5
// 解释：
// intention - > inention(删除 't')
// inention - > enention(将 'i'
//     替换为 'e')
// enention - > exention(将 'n'
//     替换为 'x')
// exention - > exection(将 'n'
//     替换为 'c')
// exection - > execution(插入 'u')

// 来源： 力扣（LeetCode）
// 链接： https://leetcode-cn.com/problems/edit-distance

// 这里涉及到两个字符串的比较，至少涉及到两个维度
// 1.确定状态，dp[i][j]是word1的子串word1[i]转成word2[j]所用的最少编辑数（）
// 2.状态转移，假设现在仅差一个操作就可将word1转换成word2，则有四种操作可选择，即word2必然从word1通过四种操作之一转换而来
// add:dp[i][j-1]+1
// del:dp[i-1][j]+1
// rep:dp[i-1][j-1]+1
// skip:dp[i-1][j-1]
// charI==charJ时，使用skip

// 所以可得出状态转移方程:
// dp[i][j] = Min(
//     dp[i][j-1]+1,
//     dp[i-1][j]+1,
//     dp[i-1][j-1]+1,
//     dp[i-1][j-1]
// )

// 3.考虑初始化，在考虑初始化的同时考虑问题转化，两个一维的字符串不够直观，我们可以这样去思考
// grid = [
//     [' ', 'h ', 'o ', 'r ', 's ', 'e ']
//     ['r', 'rh', 'ro', 'rr', 'rs', 're']
//     ['o', 'oh', 'oo', 'or', 'os', 'oe']
//     ['s', 'sh', 'so', 'sr', 'ss', 'se']
// ]
// 容易得知，第一行与第一列的最小编辑数就是字符串长度，如dp[0][0]=0,dp[0][1]=1,dp[0][2]=2,dp[1][0]=1,dp[2][0]=2
// 4.将子问题自底向上递推即可得知到达dp[m][n]的这个格子最小的编辑数

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1 = 'horse', word2 = 'ros') {
    const m = word1.length
    const n = word2.length
    const dp = []
    for (let i = 0; i <= m; i++) {
        dp[i] = [i]
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j
    }

    for (let i = 1; i <= m; i++) {
        const charI = word1[i - 1]
        for (let j = 1; j <= n; j++) {
            const charJ = word2[j - 1]
            if (charI == charJ) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(...[
                    dp[i][j - 1] + 1,
                    dp[i - 1][j] + 1,
                    dp[i - 1][j - 1] + 1
                ])
            }
        }
    }
    return dp[m][n]
};

minDistance()