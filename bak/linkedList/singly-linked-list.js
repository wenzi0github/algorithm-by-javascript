class LinkedNode {
    data = null;
    next = null;

    constructor(data) {
        this.data = data;
    }
}

class LinkedList {
    head = null;
    length = 0;

    search(data) {
        let node = this.head;
        let preNode = null;
        while (node) {
            if (node.data === data) {
                return {
                    node,
                    preNode
                };
            }
            preNode = node;
            node = node.next;
        }
        return {
            node,
            preNode
        };
    }

    // 新增数据
    add(data) {
        const newNode = new LinkedNode(data);
        if (this.head === null) {
            // 当前链表里没有节点时
            this.head = newNode;
        } else if (data <= this.head.data) {
            // 要插入节点的数据比头部节点的数据还要小
            // 将此节点插入到链表的头部
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // 将新节点插入到中间的位置
            let node = this.head;
            let preNode = null;
            while (node) {
                if (node.data >= data) {
                    preNode.next = newNode;
                    newNode.next = node;
                    break;
                } else {
                    preNode = node;
                    node = node.next;
                }
            }
            if (!node) {
                // 将新节点插入到链表的末尾
                preNode.next = newNode;
            }
        }
        this.length++;

        return this.head;
    }

    // 删除数据，返回结果表示是否删除成功
    remove(data) {
        const { node, preNode } = this.search(data);
        if (node) {
            if (!preNode) {
                // 当前删除的节点为头部节点
                // 直接将head指向到头部的下一个节点
                this.head = node.next;
            } else {
                preNode.next = node.next;
            }
            return true;
        }
        return false;
    }

    // 修改数据
    // 先通过旧数据查找节点，找到后修改，否则返回false
    modify(oldData, newData) {
        const { node } = this.search(oldData);
        if (node) {
            node.data = newData;
            return true;
        }
        return false;
    }
}
const S = new LinkedList();

/* test */

/**
 * test add
 */
S.add(1); // 1, 首次添加
S.add(3); // 1->3, 在尾部添加
S.add(2); // 1->2->3, 在中间添加
S.add(0); // 0->1->2->3, 在头部添加

// test search
S.search(2); // {node, preNode}

// delete node
S.remove(2); // 0->1->3, 删除中间的节点
S.remove(0); // 1->3, 删除头部节点
