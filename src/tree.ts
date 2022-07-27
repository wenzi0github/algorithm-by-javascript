class TreeNode {
  val: any = null;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: any) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * 将数组转为二叉树，主要在leetcode中使用
 * https://www.xiabingbao.com/post/js/leetcode-treenode-array.html
 * @param arr
 * @returns {TreeNode}
 */
export const array2binary = (arr: any[]) => {
  if (!arr || !arr.length) {
    return null;
  }
  let index = 0;
  const queue: TreeNode[] = [];
  const len = arr.length;
  const head = new TreeNode(arr[index]);
  queue.push(head);

  while (index < len) {
    index++;
    const parent = queue.shift();
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index]);
      if (parent) {
        parent.left = node;
      }
      queue.push(node);
    }

    index++;
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index]);
      if (parent) {
        parent.right = node;
      }
      queue.push(node);
    }
  }
  return head;
};

class TrieNode {
  val: string | null = null;
  childNodes: TrieNode[] = [];
  count = 0;
  isWord = false;

  constructor(val?: string) {
    this.val = val ?? null;
    this.childNodes = []; // 26个字符
    this.count = 0; // 出现的次数
    this.isWord = false; // 是否是一个完整的前缀
  }
}

/**
 * 前缀树的创建、查找
 */
export class TrieTree {
  private root: TrieNode = new TrieNode();

  constructor(dictionary?: string[]) {
    if (dictionary) {
      dictionary.forEach((word) => {
        this.insert(word);
      });
    }
  }

  insert(word: string) {
    const aCode = 'a'.charCodeAt(0);
    const { length } = word;
    let i = 0;
    let prevNode = this.root;

    while (i < length) {
      const node = new TrieNode(word[i]);
      const wordCode = word[i].charCodeAt(0) - aCode;

      if (prevNode.childNodes[wordCode]) {
        prevNode.childNodes[wordCode].count++;
      } else {
        prevNode.childNodes[wordCode] = node;
      }
      // 词根单词结束的时候，给最后的这个节点一个标记，表示到当前节点是一个完整的词根
      if (i === length - 1) {
        prevNode.childNodes[wordCode].isWord = true;
      }
      prevNode = prevNode.childNodes[wordCode];

      i++;
    }
  }

  /**
   * 查询单词是否存在在前缀树中
   * @param word 要查询的单词
   * @param isWord 是否要查询完整的单词，为false时只要word存在即可，为true时，word必须是一个完整的单词，即node.isWord为true
   */
  search(word: string, isWord = false): boolean {
    const aCode = 'a'.charCodeAt(0);
    const { length } = word;

    const find = (curIndex: number): boolean => {
      const kCode = word[curIndex].charCodeAt(0) - aCode;
      const child = this.root.childNodes[kCode];

      if (child) {
        if (curIndex === length - 1) {
          // 这是最后一个字符，若需要判断是否是完整的单词，则返回该字符的isWord属性；
          // 若不需要判断，则直接返回true即可
          return isWord ? child.isWord : true;
        }
        return find(curIndex + 1);
      }
      return false;
    };

    return find(0);
  }
}
