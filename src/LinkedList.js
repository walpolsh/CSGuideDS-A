import React from "react";
class Node {
  constructor(data, nextNode) {
    this.data = data;
    this.nextNode = nextNode;
  }
}
const node1 = new Node("a");
const node2 = new Node("b");
node1.nextNode = node2;
const node3 = new Node("c");
node2.nextNode = node3;
const node4 = new Node("d");
node3.nextNode = node4;

class LinkedList {
  constructor(firstNode) {
    this.firstNode = firstNode;
  }

  read(index, currentNode = this.firstNode, currentIndex = 0) {
    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
      if (!currentNode) {
        return null;
      }
    }
    return currentNode.data;
  }

  indexOf(value, currentNode = this.firstNode, currentIndex = 0) {
    do {
      if (currentNode.data === value) {
        return currentIndex;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    } while (currentNode);

    return null;
  }
  insertAtIndex(index, value, currentNode = this.firstNode, currentIndex = 0) {
    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    let newNode = new Node(value);
    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
    return newNode;
  }
  deleteAtIndex(index, currentNode = this.firstNode, currentIndex = 0) {
    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    let nodeAfterDeletedNode = currentNode.nextNode.nextNode;
    currentNode.nextNode = nodeAfterDeletedNode;
  }
}

const list1 = new LinkedList(node1);
console.log(list1);
console.log(list1.read(3));
console.log(list1.indexOf("c"));
console.log(list1.insertAtIndex(2, "hi"));
console.log(list1.deleteAtIndex(2));
console.log(list1);

class Node2 {
  constructor(data, nextNode, prevNode) {
    this.data = data;
    this.nextNode = nextNode;
    this.prevNode = prevNode;
  }
}
class DoublyLinkedList {
  constructor(firstNode = null, lastNode = null) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }
  insertAtEnd(value) {
    let newNode = new Node2(value);
    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      newNode.prevNode = this.lastNode;
      this.lastNode.nextNode = newNode;
      this.lastNode = newNode;
    }
  }
  removeFromFront() {
    let removedNode = this.firstNode;
    this.firstNode = this.firstNode.nextNode;
    return removedNode;
  }
}

class Queue {
  constructor() {
    this.queue = new DoublyLinkedList();
  }
  enque(value) {
    this.queue.insertAtEnd(value);
  }
  deque() {
    let removedNode = this.queue.removeFromFront();
    return removedNode.data;
  }
  tail() {
    return this.queue.lastNode.data;
  }
}
let queue1 = new Queue();
queue1.enque("1");
queue1.enque("2");
queue1.enque("33");
console.log(queue1);
queue1.deque();
console.log(queue1);
console.log(queue1.tail());
export const LinkedLists = (
  <div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
  </div>
);
