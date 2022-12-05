// Rucksack Reorganization: https://adventofcode.com/2022/day/3
//Find the item type that appears in both compartments of each rucksack.
// What is the sum of the priorities of those item types?

const fs = require("fs");
const input = fs
  .readFileSync("./Day-3/input.txt", { encoding: "utf-8" })
  .split("\n");

let duplicateAdded = false;

// split each rucksack into two sub-arrays
function splitRucksacks() {
  const splitRucksackArray = [];
  input.map((rucksack) => {
    splitRucksackArray.push(rucksack.substring(0, rucksack.length / 2));
    splitRucksackArray.push(rucksack.substring(rucksack.length / 2));
  });
  findDuplicates(splitRucksackArray);
}

// find the duplicates (items which occur in both halves) for each rucksack
// push duplicates to new array
function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    duplicateAdded = false;
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i].length; k++) {
        if (arr[i][j] === arr[i + 1][k] && duplicateAdded === false) {
          duplicates.push(arr[i][j]);
          // now stop looking for duplicates
          duplicateAdded = true;
        }
      }
    }
  }
  getPriorityVal(duplicates);
}

// lookup value of each letter
// sum total (reduce)
function getPriorityVal(duplicates) {
  const priorities = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const priorityVals = duplicates.map((item) => priorities.indexOf(item));
  const sumPriority = priorityVals.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log({ sumPriority });
}

splitRucksacks(input);
