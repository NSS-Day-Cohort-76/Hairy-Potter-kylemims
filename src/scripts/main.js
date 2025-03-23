// Imports go first
import { makePottery } from "./PotteryWheel.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 4)
let vase = makePottery("vase", 4, 9)
let cup = makePottery("cup", 1, 6)
let bowl = makePottery("bowl", 3, 3)
let pot = makePottery("pot", 8, 4)

// errors I made while working through this
// makePottery("mug", 8, 5)
// makePottery("vase", 4, 8)
// makePottery("cup", 4, 7)

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

console.log(mug)
console.log(vase)
console.log(cup)
console.log(bowl)
console.log(pot)