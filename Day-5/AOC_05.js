// Day 5: Supply Stacks - https://adventofcode.com/2022/day/5
// Crates are moved one at a time
// After the rearrangement procedure completes, what crate ends up on top of each stack?
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

const fs = require("fs");
const input = fs
  .readFileSync("./Day-5/input.txt", { encoding: "utf-8" })
  .split("\n");

  console.log(input);
// 'move 5 from 8 to 2',  'move 2 from 4 to 5', ...etc

// human parsing for the stacks! :)
// left is bottom; right is top
const s1 = ["Q","M","G","C","L"];
const s2 = ["R","D","L","C","T","F","H","G"];
const s3 = ["V","J","F","N","M","T","W","R"];
const s4 = ["J","F","D","V","Q","P"];
const s5 = ["N","F","M","S","L","B","T"];
const s6 = ["R","N","V","H","C","D","P"];
const s7 = ["H","C","T"];
const s8 = ["G","S","J","V","Z","N","H","P"];
const s9 = ["Z","F","H","G"];

// TODO
// parse 'move 5 from 8 to 2' => '5,8,2'
// Number()
// three parameters: number of moves, location 1, and location 2
// create a loop where i = number of moves
// slice from end of location 1
// push to end of location 2
// potential bug: what happens if there aren't enough crates for a move?
// log stack[stack.length-1] for each stack