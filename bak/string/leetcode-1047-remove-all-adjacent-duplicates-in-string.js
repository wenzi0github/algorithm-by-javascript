// https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
// 1047. 删除字符串中的所有相邻重复项

// 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

// 在 S 上反复执行重复项删除操作，直到无法继续删除。

// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const len = S.length;
    if (len <= 1) {
        return S;
    }
    const arr = S.split('');
    let index = 0,
        i = 0,
        j = 1;

    while (index < arr.length - 1) {
        if (arr[index] === arr[index + 1]) {
            arr.splice(index, 2);
            index = Math.max(index - 1, 0);
        } else {
            index++;
        }
    }
    return arr.join('');
};
