# algorithm by javascript

# 使用 JavaScript 实现的算法

我们在平时的工作和算法 coding 中，经常会用到一些算法，这里将一些常用的算法总结下。

## 一般算法

### 最大公约数

获取两个数的最大公约数

```javascript
import { gcd } from '@xiaowenzi/algorithm.js';

gcd(6, 4); // 2
```

## 数组

### 合并两个有序数

合并两个有序数组成新的有序数组。

```javascript
import { mergeSortedArray } from '@xiaowenzi/algorithm.js';

mergeSortedArray([1, 3, 5], [2, 4, 6, 8]); // [1, 2, 3, 4, 5, 6, 8]
```

### 删除数组中的连续重复项

删除数组中的连续重复项，若合并后依然有连续的重复项，继续删除。

- 第 1 个参数：要删除连续重复数据的数组；
- 第 2 个参数：连续重复几个就可以删除，默认为 2；

```javascript
import { removeDuplicates } from '@xiaowenzi/algorithm.js';

removeDuplicates([1, 1, 2, 2, 2, 2, 1, 1, 3], 3); // [3]
```

## 字符串

## 数字

### 质数相关

#### 判断是否为质数

```javascript
import { isPrime } from '@xiaowenzi/algorithm.js';

isPrime(10); // false
isPrime(11); // true
```

#### 统计不大于某数的质数的个数

```javascript
import { countPrimeEqualOrLessNum } from '@xiaowenzi/algorithm.js';

countPrimeEqualOrLessNum(20); // 8
countPrimeEqualOrLessNum(100); // 25
```

#### 获取不大于某数的所有质数

```javascript
import { getAllPrimesEqualOrLessNum } from '@xiaowenzi/algorithm.js';

getAllPrimesEqualOrLessNum(1); // []
getAllPrimesEqualOrLessNum(10); // [2, 3, 5, 7]
getAllPrimesEqualOrLessNum(20); // [2, 3, 5,7, 11, 13, 17, 19]
```

## 链表

### 判断链表是否有环

这里采用了经典的快慢指针，若快指针能追的上慢指针，则说明有环，返回 true；否则返回 false。

```javascript
import { hasCycleLinkedList } from '@xiaowenzi/algorithm.js';

const head = new ListNode(0);
const node1 = new ListNode(1);
const node2 = new ListNode(2);

head.next = node1;
node1.next = node2;
node2.next = head;

hasCycleLinkedList(head); // true
```

### 翻转链表

翻转单向链表，并返回新的链表头指针。

```javascript
import { reverseLinkedList } from '@xiaowenzi/algorithm.js';

const head = new ListNode(0);
const node1 = new ListNode(1);
const node2 = new ListNode(2);

head.next = node1;
node1.next = node2;

const reverseHead = reverseLinkedList(head);
```

## 树

### 二叉树

二叉树相关的算法很多。

#### LeetCode 中奖数组转为二叉树

LeetCode 中的一些关于二叉树的样例数据，都是用数组来表示的，本地调试时非常不方便，这里写了一个方法，将数组转为二叉树的结构。

```javascript
import { array2binary } from '@xiaowenzi/algorithm.js';

const root = array2binary([3, 9, 20, null, null, 15, 7]);
```

#### 二叉树的多种遍历方式

二叉树中常用的遍历方式主要有：前序遍历、中序遍历、后续遍历、层序遍历等。

```javascript
import { getTreeByPreOrder, getTreeByMidOrder, getTreeByPostOrder, getTreeByLevelOrder } from '@xiaowenzi/algorithm.js';

getTreeByPreOrder(root); // 前序遍历
getTreeByMidOrder(root); // 中序遍历
getTreeByPostOrder(root); // 后序遍历
getTreeByLevelOrder(root); // 层序遍历，返回的是一个二维数组，每层的数据在一个数组中
```

#### 翻转二叉树

这个题目出名的原因，是因为 homebrew 的作者 Max Howell 面试谷歌时因为没在白板上写出反转二叉树的算法，结果面试面试挂掉了。

![leetcode-invert-binary-tree](https://www.xiabingbao.com/algorithm/2015/06/17/invert-binary-tree.html)

```javascript
import { reverseTree } from '@xiaowenzi/algorithm.js';

reverseTree(root); // root
```

#### 判断二叉树是否左右对称

```javascript
import { isSymmetricTree } from '@xiaowenzi/algorithm.js';

isSymmetricTree(root); // boolean
```

### 是否子树

### 前缀树的插入和搜索

- search(word, isWord): 在前缀树中查找单词，若 isWord 为 true，则必须是完整的单词，默认为 false；
- insert(word): 在前缀树中插入单词；

```javascript
import { TrieTree } from '@xiaowenzi/algorithm.js';

const trie = new TrieTree(['cat', 'bat', 'rat', 'cabt']);
trie.search('ca'); // true
trie.search('ca', true); // false, 前缀树中没有完整的ca单词
trie.insert('aabb');
trie.search('aabb', true); // true
```
