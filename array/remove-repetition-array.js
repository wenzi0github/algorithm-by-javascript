// 对数组进行去重

const arr = [1, 2, 3, 2, 1, 3, 4, 5];

function uniqueArr(arr) {
    let map = {};
    let result = [];
    arr.forEach(item => {
        if (!map[item]) {
            map[item] = true;
            result.push(item);
        }
    });
    return result;
}
console.log(uniqueArr(arr)); // [1, 2, 3, 4, 5]

// 利用Set中的元素唯一性
function uniqueArrBySet(arr) {
    return [...new Set(arr)];
}
console.log(uniqueArrBySet(arr)); // [1, 2, 3, 4, 5]