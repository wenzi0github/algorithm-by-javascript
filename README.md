# algorithm by javascript

# 使用 JavaScript 实现的算法

我们在平时的工作和算法 coding 中，经常会用到一些算法，这里将一些常用的算法总结下。

## 一般算法

### 最大公约数

获取两个数的最大公约数

```javascript
import { gcd } from '@wen/algorithm.js';

gcd(6, 4); // 2
```

## 数组

### 合并两个有序数

合并两个有序数组成新的有序数组。

```javascript
import { mergeSortedArray } from '@wen/algorithm.js';

mergeSortedArray([1, 3, 5], [2, 4, 6, 8]); // [1, 2, 3, 4, 5, 6, 8]
```

### 删除数组中的重复项

删除数组中的重复项，若合并后依然有重复项，继续删除。

- 第 1 个参数：要删除重复数据的数组；
- 第 2 个参数：重复几个就可以删除，默认为 2；

```javascript
import { removeDuplicates } from '@wen/algorithm.js';

removeDuplicates([1, 1, 2, 2, 2, 2, 1, 1, 3], 3); // [3]
```

## 字符串

## 数字

### 质数相关

#### 判断是否为质数

```javascript
import { isPrime } from '@wen/algorithm.js';

isPrime(10); // false
isPrime(11); // true
```

#### 统计不大于某数的质数的个数

```javascript
import { countPrimeEqualOrLessNum } from '@wen/algorithm.js';

countPrimeEqualOrLessNum(20); // 8
countPrimeEqualOrLessNum(100); // 25
```

#### 获取不大于某数的所有质数

```javascript
import { getAllPrimesEqualOrLessNum } from '@wen/algorithm.js';

getAllPrimesEqualOrLessNum(1); // []
getAllPrimesEqualOrLessNum(10); // [2, 3, 5, 7]
getAllPrimesEqualOrLessNum(20); // [2, 3, 5,7, 11, 13, 17, 19]
```

## 链表

## 树

### 二叉树

### 是否子树

### 前缀树的插入和搜索

- search(word, isWord): 在前缀树中查找单词，若 isWord 为 true，则必须是完整的单词，默认为 false；
- insert(word): 在前缀树中插入单词；

```javascript
import { TrieTree } from '@wen/algorithm.js';

const trie = new TrieTree(['cat', 'bat', 'rat', 'cabt']);
trie.search('ca'); // true
trie.search('ca', true); // false, 前缀树中没有完整的ca单词
trie.insert('aabb');
trie.search('aabb', true); // true
```
