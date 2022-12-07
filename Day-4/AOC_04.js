// Camp Cleanup: https://adventofcode.com/2022/day/4
// Assignment pair examples:
// 8-17,16-49
// 17-38,18-36
// 17-43,43-43
// Part 1: In how many assignment pairs does one range fully contain the other?
// Part 2: In how many assignment pairs do the ranges overlap?

const fs = require("fs");
const input = fs
  .readFileSync("./Day-4/input.txt", { encoding: "utf-8" })
  .split("\n");

let sum = 0;
let sum2 = 0;

input.forEach((str) => {
  const assignmentPair = str.split(",");
  const part1 = assignmentPair[0];
  const part2 = assignmentPair[1];
  const elf0 = part1.split("-");
  const elf1 = part2.split("-");
  if (
    (Number(elf0[0]) <= Number(elf1[0]) && Number(elf0[1]) >= Number(elf1[1])) ||
    (Number(elf0[0]) >= Number(elf1[0]) && Number(elf0[1]) <= Number(elf1[1]))
  ) {
    sum++;
  }
  if (
    !(Number(elf0[1]) < Number(elf1[0]) || Number(elf1[1]) < Number(elf0[0]))
  ) {
    sum2++;
  }
});

console.log({ sum, sum2 });
