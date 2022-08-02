// https://leetcode-cn.com/problems/triangle/

// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

// 例如，给定三角形：

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const row = triangle.length;
    if (row===0) {
        return 0;
    }
    for(let i=row-2; i>=0; i--) {
        for(let j=0, col=triangle[i].length; j<col; j++) {
            let min = Math.min(triangle[i+1][j], triangle[i+1][j+1]);
            triangle[i][j] += min;
        }
    }
    return triangle[0][0];
};