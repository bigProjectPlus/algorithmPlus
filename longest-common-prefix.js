// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs = ["flower", "flow", "flight"]) {
    const s = strs[0]
    const judgeStrs = (strs = [], index) => {
        if (strs.length == 1) {
            return true
        } else if (strs.length) {
            for (let i = 0; i < strs.length; i++) {
                const elem = strs[i];
                item.slice(i, i + 1)
            }
        }
        return
    }
    if (s) {
        let res = 0
        for (let i = 0; i < min; i++) {
            const flag = judgeStrs(strs)
            if (flag > 1) {
                break
            }
            res++
        }
        // console.log(strs[0].slice(0, res));
        return strs[0].slice(0, res)
    }
    return ''
};

longestCommonPrefix(["dog", "racecar", "car"])