// Rock Paper Scissors: https://adventofcode.com/2022/day/2
// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
// The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
// plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).
// The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors.
// The second column is what you are going to play: X for Rock, Y for Paper, and Z for Scissors.
// Your total score is the sum of your scores for each round.
// What would your total score be if everything goes exactly according to your strategy guide (input file)?

// EvM - outcome:
// A Y - win: 2 + 6 = 8
// A Z - lose 3 + 0 = 3
// A X - draw 1 + 3 = 4
// B Y - draw 2 + 3 = 5
// B Z - win 3 + 6 = 9
// B X - lose 1 + 0 = 1
// C Y - lose 2 + 0 = 2
// C Z - draw 3 + 3 = 6
// C X - win 1 + 6 = 7

const fs = require("fs");
const input = fs.readFileSync("./Day-2/input.txt", { encoding: "utf-8" });

const gamesArray = input.split("\n");

let gameScoresArray = [];
const calculateMyScores = () => {
  gamesArray.map((game) => {
    switch (game) {
      case "A Y":
        gameScoresArray.push(8);
        break;
      case "A Z":
        gameScoresArray.push(3);
        break;
      case "A X":
        gameScoresArray.push(4);
        break;
      case "B Y":
        gameScoresArray.push(5);
        break;
      case "B Z":
        gameScoresArray.push(9);
        break;
      case "B X":
        gameScoresArray.push(1);
        break;
      case "C Y":
        gameScoresArray.push(2);
        break;
      case "C Z":
        gameScoresArray.push(6);
        break;
      case "C X":
        gameScoresArray.push(7);
    }
  });
  const sumScores = gameScoresArray.reduce(
    (cumulativeScore, currentScore) => cumulativeScore + currentScore,
    0
  );
  return sumScores;
};

console.log("Score 1: ", calculateMyScores());

// Part 2:
// Now, the second column says how the round needs to end:
// X means you need to lose,
// Y means you need to end the round in a draw,
// Z means you need to win.
// figure out what shape to choose so the round ends as indicated

// EvM - outcome:
// A Y - DRAW - rock 3 + 1 = 4
// A Z - WIN - paper 6 + 2 = 8
// A X - LOSE - scissors 0 + 3 = 3
// B Y - DRAW - paper 3 + 2 = 5
// B Z - WIN - scissors 6 + 3 = 9
// B X - LOSE - rock 0 + 1 = 1
// C Y - DRAW - scissors 3 + 3 = 6
// C Z - WIN - rock 6 + 1 = 7
// C X - LOSE - paper 0 + 2 = 2

let gameScoresArray2 = [];
const calculateMyScores2 = () => {
  gamesArray.map((game) => {
    switch (game) {
      case "A Y":
        gameScoresArray2.push(4);
        break;
      case "A Z":
        gameScoresArray2.push(8);
        break;
      case "A X":
        gameScoresArray2.push(3);
        break;
      case "B Y":
        gameScoresArray2.push(5);
        break;
      case "B Z":
        gameScoresArray2.push(9);
        break;
      case "B X":
        gameScoresArray2.push(1);
        break;
      case "C Y":
        gameScoresArray2.push(6);
        break;
      case "C Z":
        gameScoresArray2.push(7);
        break;
      case "C X":
        gameScoresArray2.push(2);
    }
  });
  const sumScores = gameScoresArray2.reduce(
    (cumulativeScore, currentScore) => cumulativeScore + currentScore,
    0
  );
  return sumScores;
};

console.log("Score 2: ", calculateMyScores2());
