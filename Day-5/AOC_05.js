// Day 5: Supply Stacks - https://adventofcode.com/2022/day/5
// Crates are moved one at a time
// After the rearrangement procedure completes, which crate ends up on top of each stack?
//
//     [G] [R]                 [P]    
//     [H] [W]     [T] [P]     [H]    
//     [F] [T] [P] [B] [D]     [N]    
// [L] [T] [M] [Q] [L] [C]     [Z]    
// [C] [C] [N] [V] [S] [H]     [V] [G]
// [G] [L] [F] [D] [M] [V] [T] [J] [H]
// [M] [D] [J] [F] [F] [N] [C] [S] [F]
// [Q] [R] [V] [J] [N] [R] [H] [G] [Z]
//  1   2   3   4   5   6   7   8   9 

// 'move 5 from 8 to 2',  'move 10 from 4 to 7', ...etc


const fs = require("fs");
const input = fs
  .readFileSync("./Day-5/input.txt", { encoding: "utf-8" })
  .split("\n");


// human parsing for the stacks! :)
// left is bottom; right is top
const stacks = [
    ["Q","M","G","C","L"],
    ["R","D","L","C","T","F","H","G"],
    ["V","J","F","N","M","T","W","R"],
    ["J","F","D","V","Q","P"],
    ["N","F","M","S","L","B","T"],
    ["R","N","V","H","C","D","P"],
    ["H","C","T"],
    ["G","S","J","V","Z","N","H","P"],
    ["Z","F","H","G"]
]

// Parse, e.g., 'move 10 from 8 to 2' => '10,8,2'
// Set variables for three parameters: 'number of moves', 'location from', and 'location to' (convert to number type)
input.forEach((str) => {
    const parsedInstructions = str.replace('move ','').replace(' from ',',').replace(' to ',',');
    const instructionsArray = parsedInstructions.split(',');
    const moves = Number(instructionsArray[0]);
    const locationFrom = Number(instructionsArray[1]);
    const locationTo = Number(instructionsArray[2]);
    
    // Create a loop where i = number of moves
    // Pop from end of locationFrom
    // Push to end of locationTo
    for (let i = 0; i < moves; i++) {
        const crate = stacks[locationFrom-1].pop();
        stacks[locationTo-1].push(crate);
    }
});

// log final top crate for each stack
for (let i = 0; i < stacks.length; i++) {
    console.log(stacks[i][stacks[i].length-1]);
};