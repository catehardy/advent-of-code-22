// Calorie counting: https://adventofcode.com/2022/day/1
// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

// access file system
// https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/
const fs = require("fs");
const input = fs.readFileSync("./Day-1/input.txt", { encoding: "utf-8" });

// #1: let's JSON stringify to see the newline `\n` pattern
// console.log(JSON.stringify(input))

// #2: let's use the \n\n pattern we noticed to split the elves
const elvesString = input.split("\n\n");

/**
 * #3: convert each elf's foods into an array of numbers of calories
 * Array of strings like '2074\n3476\n4064\n9446\n2889\n4871\n6298\n2970\n8588'
 * 1. We need to split by `\n` (ex: `[ "2074", "3476", "4064", "9446", "2889", "4871", "6298", "2970", "8588" ]`)
 * 2. convert strings into numbers
 */
const elvesFoodItems = elvesString.map((str) => str.split("\n").map(Number));

// #4 sum the calories of each elf
function getHighestCals() {
  let highestCals = 0;
  for (let i = 0; i < elvesFoodItems.length; i++) {
    let elfCalories = elvesFoodItems[i].reduce(
      (sum, foodItem) => sum + foodItem
    );
    if (elfCalories > highestCals) {
      highestCals = elfCalories;
    }
  }
  return highestCals;
}

const answer = getHighestCals(elvesFoodItems);
console.log("Answer: ", answer);
