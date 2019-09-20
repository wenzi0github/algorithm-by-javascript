// 打乱数组

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 从数组的随机位置抽取数据组成新的数组
function randomArrByOut(arr) {
    let result = [];
    let arrTemp = arr.concat(); // splice会影响原数组，复制一个新的数组，防止影响原数组
    while (arrTemp.length) {
        let index = Math.floor(Math.random() * arrTemp.length);
        result.push(arrTemp[index]);
        arrTemp.splice(index, 1);
    }
    return result;
}
randomArrByOut(arr);

// 使用sort()方法
function randomSortBySort(arr) {
    return arr.concat().sort(() => Math.random() - 0.5);
}
randomSortBySort(arr);

// 洗牌算法
function shuffleSort(arr) {
    const _arr = arr.concat();
    let n = arr.length;

    while (n--) {
        let index = Math.floor(Math.random() * n);
        let temp = _arr[index];
        _arr[index] = _arr[n];
        _arr[n] = temp;
        // ES6的解耦交换方式： [arr[index], arr[n]] = [arr[n], arr[index]];
    }
    return _arr;
}
shuffleSort(arr);
