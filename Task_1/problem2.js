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
3.14159;
function main() {
  const PI = 3.14159;
  let r = parseFloat(readLine());
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

  // Print the area of the circle:
  let area = r * r * PI;
  let perimeter = 2 * r * PI;
  console.log(area);
  console.log(perimeter);
  // Print the perimeter of the circle:

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
