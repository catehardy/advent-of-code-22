// Day 6: Tuning Trouble - https://adventofcode.com/2022/day/6
// The signal is a series of seemingly-random characters that the device receives one at a time.
// The start of a packet is indicated by a sequence of four characters that are all different.
// Task: identify the first position where the four most recently received characters were all unique;
// report the number of characters from the beginning of the input to the end of
// the first such four-character marker, e.g. mjqjpqmgb => character 7 (jpqm, where m is 7th char)

const fs = require("fs");
const input = fs.readFileSync("./Day-6/input.txt", { encoding: "utf-8" });

// Note on some() vs every() - I need to use some() here because every() will iterate over the whole array
// and return "false" to 'containsDuplicates' if there are ANY elements which AREN'T duplicates!
function containsDuplicates(array) {
  const result = array.some((element) => {
    if (array.indexOf(element) !== array.lastIndexOf(element)) {
      return true;
    }
    return false;
  });
  return result;
}

// Part 1:
// populate array with first 4 chars of input
const checkingArr = [];
for (let i = 0; i < 4; i++) {
  checkingArr.push(input[i]);
}

for (let i = 0; i < input.length; i++) {
  if (!containsDuplicates(checkingArr)) {
    console.log("Part 1: ", i + 4);
    break;
  } else {
    checkingArr.splice(0, 1);
    checkingArr.push(input[i + 4]);
  }
}

// Part 2:
// populate array with first 14 chars of input
const checkingArr2 = [];
for (let i = 0; i < 14; i++) {
  checkingArr2.push(input[i]);
}

for (let i = 0; i < input.length; i++) {
  if (!containsDuplicates(checkingArr2)) {
    console.log("Part 2: ", i + 14);
    break;
  } else {
    checkingArr2.splice(0, 1);
    checkingArr2.push(input[i + 14]);
  }
}
