

import { usePottery } from "./PotteryCatalog.js"
export const potteryList = () => {

    const potteryForSale = usePottery();
    
        let potteryHTML = `<article class="potteryList">`
        
            for (const pottery of potteryForSale) {
                potteryHTML += `
                <section class="pottery" id="pottery--${pottery.id}">
                    <h2 class="pottery__shape">${pottery.shape}</h2>
                    <img src="${pottery.image}" alt="Image of a ${pottery.shape}" class="pottery__image">
                    <div class="pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
                    </div>
                    <div class="pottery__price">Price is $${pottery.price}</div>
                    <button type="button">Buy Me!</button>
                </section>`
            }

            potteryHTML += `</article>`
            return potteryHTML
        }