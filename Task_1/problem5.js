"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function DistinctValuse(elment, index, array) {
  return array.indexOf(elment) === index;
}
function getSecondLargest(nums) {
  nums.sort((a, b) => a - b);
  let unique = nums.filter(DistinctValuse);
  return unique[unique.length - 2];
  // console.log(unique[unique.length -2]);
}

function main() {
  const n = +readLine();
  const nums = readLine().split(" ").map(Number);

  console.log(getSecondLargest(nums));
}
