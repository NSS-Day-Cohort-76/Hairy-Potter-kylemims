let potteryCount = 1;

export const makePottery = (shape, weight, height) => {

    const potteryPiece = {
        shape,
        weight,
        height,
        id: potteryCount
    }

    potteryCount++
    return potteryPiece;

}
