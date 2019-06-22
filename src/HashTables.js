import React from "react";

const menu = { fries: 1.5, hamburger: 4, icecream: 1.75 };
const guy = {
  "big guy": "hey"
};
guy["girl"] = "a girl";
const votes = {};
const addVote = candidate =>
  votes[candidate] ? votes[candidate]++ : (votes[candidate] = 1);
["paul", "paul", "henry"].map(addVote);
const log = x => console.log(x);
const countdown = x => {
  log(x);
  return x === 0 ? x : countdown(x - 1);
};

const factoral = x => (x === 1 ? x : x * factoral(x - 1));
export const m = (
  <div>
    <div>{``}</div>
    <div>{``}</div>
    <div>{guy["big guy"]}</div>
    <div>{guy["girl"]}</div>
    <div>${menu.fries}</div>
    <div>${menu.hamburger}</div>
    <div>${menu.icecream}</div>
    <div>{votes.paul}</div>
    <div>{countdown(3)}</div>
    <div>{factoral(4)}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
  </div>
);
