// https://leetcode-cn.com/problems/subarray-sum-equals-k/
// 和为K的子数组

// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力双层搜索
var subarraySum = function(nums, k) {
    let result = 0;

    for (let i = 0, len = nums.length; i < len; i++) {
        let sum = 0;
        for (let j = i; j < len; j++) {
            sum += nums[j];

            if (sum === k) {
                result++;
            }
        }
    }
    return result;
};
