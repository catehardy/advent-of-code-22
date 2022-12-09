// Day 6: Tuning Trouble - https://adventofcode.com/2022/day/6
// The signal is a series of seemingly-random characters that the device receives one at a time.
// The start of a packet is indicated by a sequence of four characters that are all different.
// Task: identify the first position where the four most recently received characters were all unique;
// report the number of characters from the beginning of the input to the end of the first such four-character marker.
// e.g. mjqjpqmgb => character 7 (jpqm, where m is 7th char)

const fs = require("fs");
const input = fs.readFileSync("./Day-6/input.txt", { encoding: "utf-8" });

const checkingArr = [input[0],input[1],input[2],input[3]];

for (let i = 0; i < input.length; i++) {
  if (
    checkingArr[0] !== checkingArr[1] &&
    checkingArr[0] !== checkingArr[2] &&
    checkingArr[0] !== checkingArr[3] &&
    checkingArr[1] !== checkingArr[2] &&
    checkingArr[1] !== checkingArr[3] &&
    checkingArr[2] !== checkingArr[3]
  ) {
    console.log(i+4)
    break;
  } else {
    checkingArr.splice(0,1);
    checkingArr.push(input[i+4]);
  }
}
