// Rucksack Reorganization: https://adventofcode.com/2022/day/3

// A given rucksack always has the same number of items in each of its two compartments,
// so the first half of the characters represent items in the first compartment,
// while the second half of the characters represent items in the second compartment.
// Every item type is identified by a single lowercase or uppercase letter
// (that is, a and A refer to different types of items).

// To help prioritize item rearrangement, every item type can be converted to a priority:
// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

//Find the item type that appears in both compartments of each rucksack.
// What is the sum of the priorities of those item types?

// TODO
// split each rucksack into two sub-arrays
// find the duplicates (items which occur in both halves) for each rucksack
// push duplicates to duplicateItems array
// convert/lookup value of each letter and sum total

const fs = require("fs");
const input = fs.readFileSync("./Day-3/input.txt", { encoding: "utf-8" });

const rucksackArray = input.split("\n");

let splitRucksackArray = [];
let duplicateItems = [];

// let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
// console.log(findDuplicates(rucksackArray)) // All duplicates

// The substring() method returns:
// the part of the string from the start index up to and excluding the end index,
// or to the end of the string if no end index is supplied
const splitIntoHalves = rucksackArray.map((rucksack) => {
  splitRucksackArray.push(rucksack.substring(0, rucksack.length / 2));
  splitRucksackArray.push(rucksack.substring(rucksack.length / 2));
});

// splitIntoHalves(rucksackArray);
console.log(splitRucksackArray);
