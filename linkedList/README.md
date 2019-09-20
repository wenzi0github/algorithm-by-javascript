# 链表

链表主要分为：单向链表、双向链表和循环链表。

对链表的操作主要是：增加节点、删除节点、修改节点和查找节点。在进行这些操作时要考虑到链表开头、中间和结尾分别怎么进行操作。

我们来一一进行实现。首先定义一个Node节点结构体：

```javascript
function LinkedNode(data) {
    this.data = data;
    this.next = null;
}
```

使用next查找下一个节点。

### 单向链表

单向链表即查找只能朝着一个方向。

我们先创建一个空的链表：

```javascript
class LinkedList {
    list = null;
    length = 0;

    constructor() {}
}
```

#### 增加节点

这里我们创建一个新的节点D：

```javascript
const D = new LinkedNode(4);

class LinkedList {
    add(node) {

    }
}
```