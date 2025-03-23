//define a variable with an empty array
let potteryToSell = []

export const toSellOrNotToSell = (pottery) => {

    if (!pottery.cracked) {
        if (pottery.weight >= 6) {
            pottery.price = 40
    
        } else {
            pottery.price = 20
        }
        potteryToSell.push(pottery)
    }

    return pottery
}

export const usePottery = () => {
    return [...potteryToSell]
}