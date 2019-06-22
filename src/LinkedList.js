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
}

const list1 = new LinkedList(node1);
console.log(list1.read(3));
console.log(list1.indexOf("c"));

export const LinkedLists = (
  <div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
  </div>
);
