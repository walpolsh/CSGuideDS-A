import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { m } from "./HashTables";
import { LinkedLists } from "./LinkedList";
import { BinaryTrees } from "./BinaryTrees";
function div(x) {
  return <div>{x}</div>;
}
const linearSearch = (arr, value) =>
  arr.map(x =>
    x === value
      ? div(`${value} found `)
      : x > value
      ? div(`${x} is larger than ${value} `)
      : value > x
      ? div(`${value} is larger than ${x} `)
      : div(`${value} not found `)
  );

function binarySearch(
  array,
  value,
  upperBound = array.length - 1,
  lowerBound = 0
) {
  while (lowerBound <= upperBound) {
    let midpoint = Math.floor((upperBound + lowerBound) / 2);
    let valueAtMidpoint = array[midpoint];
    if (value < valueAtMidpoint) {
      upperBound = midpoint - 1;
    } else if (value > valueAtMidpoint) {
      lowerBound = midpoint + 1;
    } else if (value === valueAtMidpoint) {
      return div(`${valueAtMidpoint} found`);
    }
  }
  return div(`${value} not found`);
}
let arr = [1, 2, 3, 5, 6];
linearSearch(arr, 8);
binarySearch(arr, 6);

function bubbleSort(arr, unsortedUntilIndex = arr.length - 1, sorted = false) {
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    unsortedUntilIndex = unsortedUntilIndex - 1;
  }
  return arr;
}

const list = [4, 2, 1, 3, 6, 5]; // [1, 2, 3, 4, 5, 6]

function hasDuplicateValues(arr, steps = 0) {
  return arr.map((x, i) => {
    steps++;

    return arr.map((y, j) => (i !== j && arr[i] === arr[j] ? true : false));
  });
}
const list2 = [15, 16, 1, 3, 51, 61, 45, 45];

function hasDuplicateValues2(arr, steps = 0) {
  let existingNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    steps++;

    if (existingNumbers[arr[i]] === undefined) {
      existingNumbers[arr[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}
const list3 = [15, 16, 1, 3, 51, 61, 45, 45];

const list4 = [1, 5, 3, 2, 6, 4];

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let lowest = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
const sortedList = selectionSort(list4);
const everyOther = (arr, arr2 = [], index = 0) => {
  while (index < arr.length) {
    arr2.push(arr[index]);
    index += 2;
  }
  return arr2;
};

const insertionSort = arr => {
  for (let index = 1; index < arr.length; index++) {
    let position = index;
    let tempValue = arr[index];
    while (position > 0 && arr[position - 1] > tempValue) {
      arr[position] = arr[position - 1];
      position = position - 1;
      arr[position] = tempValue;
    }
  }
  return arr;
};

const intersection = (arr1, arr2, result = []) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        break; //cut the inner loop short
      }
    }
  }
  return result;
};
const sub = ["{", "(", "["];
class Linter {
  constructor() {
    this.stack = [];
  }

  lint(text) {
    this.stack.push(text);
    let res = text.split().map((x, i) => {});
    console.log(text, this.stack);
  }
}
const linter1 = new Linter();
linter1.lint("125512515");
class PrintManager {
  constructor() {
    this.queue = [];
  }
  queuePrint(doc) {
    this.queue.push(doc);
  }
  run() {
    while (this.queue.length) {
      console.log(this.queue.shift());
    }
  }
}
const printer1 = new PrintManager();
printer1.queuePrint("page 1");
printer1.queuePrint("page 2");
printer1.queuePrint("page 3");
printer1.run();

function App() {
  return (
    <div className="App">
      <div>{BinaryTrees}</div>
      <div>{LinkedLists}</div>
      <div>{m}</div>
      <div>{linearSearch(arr, 8)}</div>
      <div>{linearSearch(arr, 3)}</div>
      <div>{binarySearch(arr, 3)}</div>
      <div>{binarySearch(arr, 4)}</div>
      <div>{bubbleSort(list).join(" ")}</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
