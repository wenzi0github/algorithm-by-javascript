我们将数组的方法分为以下三类：

-   改变原数组的方法:
    -   splice()
    -   sort()
    -   pop()
    -   push()
    -   shift()
    -   unshift()
    -   reverse()
    -   copyWithin()
    -   fill()
-   不改变原数组的方法:
    -   slice()
    -   join()
    -   toLocalString()
    -   toString()
    -   concat()
    -   indexOf()
    -   lastIndexOf()
    -   includes()
-   遍历数组的方法：
    -   forEach()
    -   every()
    -   some()
    -   filter()
    -   map()
    -   reduce()
    -   reduceRight()
    -   find()
    -   keys() & values()

### 改变原数组的方法

以下这些都是要改变原有数组数据或者位置的，如果要保持原数组的数据不可变时，请谨慎使用。

#### splice()：增加或删除数组中的元素

返回的数据为被删除数组组成的数组

> The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

> splice() 方法通过删除或者用新数据替换的方式改变数组中的内容

使用语法

> var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

example:

```javascript
let arr = [0, 1, 2, 3, 4];
arr.splice(1, 2); // from index 1, deleteCount: 2
console.log(arr); // [0, 3, 4]

arr.splice(1, 0, 10); // from index 1, deleteCount: 0, insert one digit 10
console.log(arr); // [0, 10, 3, 4]
```

#### sort()：排序

数组中默认是将数据转为字符串后进行排序的，例如 10 会排在 2 前面，因此通常要专门编写比较的回调方法。当回调返回的结果表现一致时，则会按照顺序排列，当返回的结果不一致时，会造成排序混乱。

```javascript
[1, 2, 10, 3, 20].sort(); // [1, 10, 2, 20, 3]
['a', 'B', 'c'].sort(); // ['B', 'a', 'c']

[1, 2, 10, 3, 20].sort((x, y) => (x < y ? -1 : 1)); // [1, 2, 3, 10, 20]

[
    {
        ename: 'John',
        score: 80
    },
    {
        ename: 'Tom',
        score: 90
    },
    {
        ename: 'wenzi',
        score: 70
    }
].sort((x, y) => (x.score < y.score ? -1 : 1)); // 按照分数从低到高进行排序
/*
[
    {ename: "wenzi", score: 70},
    {ename: "John", score: 80},
    {ename: "Tom", score: 90}
]
*/

// 混乱排序，每次执行的结果都不一样
[1, 2, 10, 3, 20].sort(() => (Math.random() < 0.5 ? -1 : 1)); // [10, 1, 2, 20, 3]
```

#### pop()：删除数组的最后一个元素并返回

pop 方法根据 length 属性来确定最后一个元素的位置。如果不包含 length 属性或 length 属性不能被转成一个数值，会将 length 置为 0，并返回`undefined`。

```javascript
let arr = [1, 2, 3, 4];
const lastItem = arr.pop();
console.log(lastItem); // 4
console.log(arr); // [1, 2, 3]

[].pop(); // undefined
```

#### push()：向数组的末尾添加 1 个或多个元素并返回该数组的新长度

`push()`方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

```javascript
let arr = [];
let newLength = arr.push(1, 2, 3);
console.log(newLength); // 3
console.log(arr); // [1, 2, 3]
```

使用`pop()`和`push()`可以组成一个简单的栈结果，这两个方法都是操作数组结尾的数据。[链接预留]

#### shift()：删除数组的第一个元素并返回

shift 方法移除索引为 0 的元素(即第一个元素)，并返回被移除的元素，其他元素的索引值随之减 1。如果 length 属性的值为 0 (长度为 0)，则返回 `undefined`。

```javascript
let arr = [1, 2, 3];
const firstItem = arr.shift();
console.log(firstItem); // 1
console.log(arr); // [2, 3]

[].shift(); // undefined
```

#### unshift(): 向数组的头部添加 1 个或多个元素并返回该数组的新长度

unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。注意, 如果传入多个参数，它们会被以块的形式插入到对象的开始位置，它们的顺序和被作为参数传入时的顺序一致。 于是，传入多个参数调用一次 unshift ，和传入一个参数调用多次 unshift (例如，循环调用)，它们将得到不同的结果。

```javascript
let arr = [];
let newLength = arr.unshift(1, 2, 3);
console.log(newLength); // 3
console.log(arr); // [1, 2, 3]

arr.unshift(4);
arr.unshift(5);
arr.unshift(6);
console.log(arr); // [6, 5, 4, 1, 2, 3]
```

#### reverse(): 翻转数组中的元素

该方法可以把数组中的数据进行首尾翻转，并返回该数组的引用，同时修改原数组。

```javascript
let arr = [1, 2, 3, 4];
const newArr = arr.reverse();
console.log('newArr', newArr); // [4, 3, 2, 1]
console.log('arr', arr); // [4, 3, 2, 1]
```

#### copyWithin(): 浅复制数组中的一部分到另一个位置