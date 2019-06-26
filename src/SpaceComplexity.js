import React from "react";

function makeUpperCase(x) {
  let newX = [];
  for (let i = 0; i < x.length; i++) {
    newX[i] = x[i].toUpperCase();
  }
  return newX;
} //O(n)

function makeUpper(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
  }
  return arr;
}
function toUpper(x) {
  return x.toUpperCase();
}
function makeUpper2(arr) {
  return arr.map(toUpper);
}
console.log(makeUpper(["love"]));
console.log(makeUpper2(["pain"]));
console.log(makeUpperCase("so what"));

function hasDuplicateValue(arr) {
  arr.map(x => {
    if (!x) {
      arr[x] = 1;
    } else {
      return true;
    }
    return false;
  });
}
console.log(hasDuplicateValue([1, 2, 3, 4, 4]));
export const SpaceComplexity = (
  <div>
    <div>{makeUpperCase("while true")}</div>
    <div>{makeUpper(["love"])}</div>
    <div>{makeUpper2(["js"])}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
  </div>
);
