// https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/
// 1394. 找出数组中的幸运数
// 在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。

// 给你一个整数数组 arr，请你从中找出并返回一个幸运数。

// 如果数组中存在多个幸运数，只需返回 最大 的那个。
// 如果数组中不含幸运数，则返回 -1 。

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    if (arr.length === 1) {
        return arr[0] === 1 ? 1 : -1;
    }
    let map = {};
    let max = -1;

    arr.forEach(item => {
        map[item] = (map[item] || 0) + 1;
    });

    for (let num in map) {
        if (Number(num) === map[num] && map[num] > max) {
            max = map[num];
        }
    }
    return max;
};
