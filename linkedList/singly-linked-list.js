function LinkedNode( data ) {
    this.data = data;
    this.next = null;
}

class LinkedList {
    head = null;
    length = 0;

    search( data ) {
        let node = this.head;
        while ( node ) {
            if ( node.data === data ) {
                return node;
            }
            node = node.next;
        }
        return null;
    }

    add( data ) {
        const node = new LinkedNode( data );
        if ( this.head === null ) {
            this.head = node;
        } else if ( data <= this.head.data ) {
            node.next = this.head;
            this.head.next = node;
        } else {
            let _node = this.head;
            let preNode = null;
            while ( _node ) {
                if ( _node.data >= data ) {
                    preNode.next = node;
                    node.next = _node;
                    break;
                } else {
                    preNode = _node;
                    _node = _node.next;
                }
            }
            if ( !_node ) {
                preNode.next = node;
            }
        }
    }
}
const S = new LinkedList();