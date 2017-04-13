function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}


LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
}
LinkedList.prototype.removeTail = function () {
        if (!this.tail) return null;
        var val = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        else this.head = null;
        return val;
    }
    // var ll = new LinkedList();
    // ll.addToHead(1000);
    // ll.addToHead(2000);
    // ll.addToTail(3000);
    // // ll.removeTail();
    // console.log(ll.removeTail());

LinkedList.prototype.search = function (searchValue) {
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
}

LinkedList.prototype.indexOf = function (searchValue) {
    var arrayOfIndexes = [];
    var index = 0;
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchValue) {
            arrayOfIndexes.push(index);
        }
        currentNode = currentNode.next;
        index++;
    }
    return arrayOfIndexes;
};

// var ll = new LinkedList();
// ll.addToHead(1);
// ll.addToHead(5);
// ll.addToHead(3);
// ll.addToHead(5);
// ll.addToHead(8);
// ll.addToHead(7);
// ll.addToHead(5);

// console.log(ll.indexOf(5));
