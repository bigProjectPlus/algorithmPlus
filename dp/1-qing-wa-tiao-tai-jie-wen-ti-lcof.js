// 一只青蛙一次可以跳上1级台阶， 也可以跳上2级台阶。 求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

// 答案需要取模 1e9 + 7（ 1000000007）， 如计算初始结果为： 1000000008， 请返回 1。

// 来源： 力扣（ LeetCode）
// 链接： https: //leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof

// 示例 1：

// 输入： n = 2
// 输出： 2
// 示例 2：

// 输入： n = 7
// 输出： 21
// 提示：

// 0 <= n <= 100

// 1.确定状态，dp[i]是当前第i级台阶的总跳法数
// 2.状态转移，第i级台阶必然是从第i-1或i-2级台阶跳上来的，可知dp[i]=dp[i-1]+dp[i-2]
// 3.考虑初始化，n<2时，容易发现dp[0]=1,dp[1]=1
// 4.自底向上递推即可
function frogSBS(n) {
    const dp = []
    dp[0] = 1
    dp[1] = 1
    if (n == 0) return dp[0]
    if (n == 1) return dp[1]
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % (1e9 + 7)
    }
    return dp[n]
}

// function Foo() {
//     getName = function () {
//         console.log(1);
//     };
//     return this;
// }
// Foo.getName = function () {
//     console.log(2);
// };
// Foo.prototype.getName = function () {
//     console.log(3);
// };
// var getName = function () {
//     console.log(4);
// };

// function getName() {
//     console.log(5);
// }

// //请写出以下输出结果：
// Foo.getName();
// getName();
// Foo().getName();
// getName();
// new Foo.getName();
// new Foo().getName();
// new new Foo().getName();