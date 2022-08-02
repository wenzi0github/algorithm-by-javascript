// https://leetcode-cn.com/problems/climbing-stairs/

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let x, y, step;
    if (n <= 3) {
        return n;
    }
    (x = 2), (y = 3);
    for (let i = 4; i <= n; i++) {
        step = x + y;
        x = y;
        y = step;
    }
    return step;
};
