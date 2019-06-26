import React from "react";
function TreeNode(value, left = null, right = null) {
  this.value = value;
  this.leftChild = left;
  this.rightChild = right;
}
let node1 = new TreeNode(1);
let node2 = new TreeNode(10);
let node3 = new TreeNode(5, node1, node2);
let node4 = new TreeNode(
  3,
  new TreeNode(2),
  new TreeNode(4),
  new TreeNode(1),
  new TreeNode(5)
);
const search2 = (
  value,
  node,
  cond1 = node === null || node.value === value,
  cond2 = value < node.value,
  left = node.leftChild,
  right = node.rightChild
) => (cond1 ? node : cond2 ? search(value, left) : search(value, right));

function search(value, node) {
  if (node === null || node.value === value) {
    return node;
  } else if (value < node.value) {
    return search(value, node.leftChild);
  } else {
    return search(value, node.rightChild);
  }
}

function insert(value, node) {
  if (value < node.value) {
    if (node.leftChild === null) {
      node.leftChild = new TreeNode(value);
    } else {
      insert(value, node.leftChild);
    }
  } else if (value > node.rightChild) {
    if (node.rightChild === null) {
      node.rightChild = new TreeNode(value);
    } else {
      insert(value, node.rightChild);
    }
  }
  return node;
}
console.log(insert(56, node4));

function deleteValue(valueToDelete, node) {
  if (node === null) {
    return null;
  } else if (valueToDelete < node.value) {
    node.leftChild = deleteValue(valueToDelete, node.leftChild);
    return node;
  } else if (valueToDelete > node.value) {
    node.rightChild = deleteValue(valueToDelete, node.rightChild);
  } else if (valueToDelete === node.value) {
    if (node.leftChild === null) {
      return node.rightChild;
    } else if (node.rightChild === null) {
      return node.leftChild;
    }
  } else {
    node.rightChild = lift(node.rightChild, node);
    return node;
  }
}

function lift(node, nodeToDelete) {
  if (node.leftChild) {
    node.leftChild = lift(node.leftChold, nodeToDelete);
    return node;
  } else {
    nodeToDelete.value = node.value;
    return node.rightChild;
  }
}
// deleteValue("3", node4);
// console.log(node4);

function traverseAndPrint(node) {
  if (!node) {
    return;
  }
  traverseAndPrint(node.leftChild);
  console.log(node.value);
  traverseAndPrint(node.rightChild);
}
traverseAndPrint(node4);
export const BinaryTrees = (
  <div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>node3.leftChild.value {node3.leftChild.value}</div>
    <div>node3.rightChild.value {node3.rightChild.value}</div>
    <div>search(1, node3).value {search(1, node3).value}</div>
    <div>search(10, node3).value {search(10, node3).value}</div>
    <div>search(5, node3).value {search(5, node3).value}</div>
    <div>search2(1, node3).value {search2(1, node3).value}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
  </div>
);
