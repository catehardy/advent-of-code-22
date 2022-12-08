// Day 5: Supply Stacks - https://adventofcode.com/2022/day/5
// Testing the solution with smaller input

const fs = require("fs");
const input = fs
  .readFileSync("./Day-5/input-test.txt", { encoding: "utf-8" })
  .split("\n");

  console.log(input);

const stacks = [
    ["Q","M","G","C","J"],
    ["H","C","T","B","X","K"],
    ["Z","F","H","G","U","W"],
    ["A","D","B","S","H","L"]
]

input.forEach((str) => {
    const parsedInstructions = str.replace('move ','').replace(' from ',',').replace(' to ',',');
    const instructionsArray = parsedInstructions.split(',');
    const moves = Number(instructionsArray[0]);
    const locationFrom = Number(instructionsArray[1]);
    const locationTo = Number(instructionsArray[2]);
    console.log({moves, locationFrom, locationTo})

    const crate = stacks[locationFrom-1].splice(-moves);
    for (let j = 0; j < crate.length; j++) {
        stacks[locationTo-1].push(crate[j]);
        console.log({stacks})
        console.log({crate})
    }

});

// log final top crate for each stack
for (let i = 0; i < stacks.length; i++) {
    console.log(stacks[i][stacks[i].length-1]);
};