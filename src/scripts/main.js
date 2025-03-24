// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 4)
let vase = makePottery("vase", 4, 9)
let cup = makePottery("cup", 1, 6)
let bowl = makePottery("bowl", 3, 3)
let pot = makePottery("pot", 8, 4)

firePottery(mug, 2000)
firePottery(vase, 2800)
firePottery(cup, 1800)
firePottery(bowl, 3000)
firePottery(pot, 2100)



toSellOrNotToSell(mug, 2000)
toSellOrNotToSell(vase, 2800)
toSellOrNotToSell(cup, 1800)
toSellOrNotToSell(bowl, 3000)
toSellOrNotToSell(pot, 2100)




// don't make these errors again....
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




