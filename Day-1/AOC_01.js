// Calorie counting: https://adventofcode.com/2022/day/1
// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

/**
 * Intuitively:
 *
 * 1. split the input into separate elves
 * 2. count the total calories of each
 * 3. sort them by total count
 * 4. get the first item in this collection (max)
 */

// access file system
 const fs = require('fs')

 console.time('time taken')

 // https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/
 const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' })
 
 // #1: let's JSON stringify to see the newline `\n` pattern
 // console.log(JSON.stringify(input))
 
 // #2: let's use the \n\n pattern we noticed to split the elves
 const elvesString = input.split('\n\n')
 
 /**
  * #3: convert each elf's foods into an array of numbers of calories
  * Array of strings like '2074\n3476\n4064\n9446\n2889\n4871\n6298\n2970\n8588'
  * 1. We need to split by `\n` (ex: `[ "2074", "3476", "4064", "9446", "2889", "4871", "6298", "2970", "8588" ]`)
  * 2. convert strings into numbers
  */
 const elvesFoodItems = elvesString.map((str) => str.split('\n').map(Number))

//  console.log({elvesFoodItems})



 /**
  * #4 sum the calories of each elf
  * example elfFoodItems data:
  * [1882, 5005, 3805, 2088, 6809, 4982, 1935, 6789, 1961, 1842, 5988, 2859, 3965]
  * 
  * // We have an ARRAY of elfFoodItems, so it's [[...], [...], [...]]
 */



function getHighestCals() {
    let highestCals = 0;
    for (let i = 0; i < elvesFoodItems.length; i++) {
        let elfCalories = elvesFoodItems[i].reduce((sum, foodItem) => sum + foodItem);
        if (elfCalories > highestCals) {
            highestCals = elfCalories;
        }
    }
    return(highestCals);
};

const answer = getHighestCals(elvesFoodItems);

console.log("lenght:", elvesFoodItems.length)
console.log("Answer: ", answer);

// const sum = elvesFoodItems.forEach(elf => elf.reduce((sum, calories) => sum + calories));


// const sum = elvesFoodItems.reduce((sum, elfFoodItems) => sum + elfFoodItems, 0)
// console.log(sum)

// #5 sort the elves
 

// create two empty arrays - one for storing input numbers and one for calorie totals
// store input numbers in first array, preserving spaces
// map over array, adding together consecutive numbers (those which aren't separated by spaces)
// push each totalled group to second array
// sort second array numerically
// find highest number


console.timeEnd('time taken')