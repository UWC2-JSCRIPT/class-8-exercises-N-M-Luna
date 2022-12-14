describe('Test for homework', ()=>{

    describe('Test the dealerShouldDraw', ()=>{
        
        const tenHearts = {
            val: 10,
            displayVal: "10",
            suit: "heart"
        }
        const nineSpades = {
            val: 9,
            displayVal: "9",
            suit: "spades"
        }
        const aceClubs = {
            val: 11,
            displayVal: "Ace",
            suit: "clubs"
        }
        const sixDiamonds = {
            val: 6,
            displayVal: "6",
            suit: "diamonds"
        }
        const twoHearts = {
            val: 2,
            displayVal: "2",
            suit: "hearts"
        }
        const fourSpades = {
            val: 4,
            displayVal: "4",
            suit: "spades"
        }
        const fiveDiamonds = {
            val: 5,
            displayVal: "5",
            suit: "diamonds"
        }
          
        it('Should return correct point total', () =>{
            //10, 9 passed in to function should return false
            let dealerShouldDrawBoolean = dealerShouldDraw([tenHearts, nineSpades])
            expect(dealerShouldDrawBoolean).toBe(false)

            //Ace, 6 passed in to function should return true
            dealerShouldDrawBoolean = dealerShouldDraw([aceClubs, sixDiamonds])
            expect(dealerShouldDrawBoolean).toBe(true) //

            //10, 6, Ace passed in to function should return false
            dealerShouldDrawBoolean = dealerShouldDraw([tenHearts,sixDiamonds,aceClubs])
            expect(dealerShouldDrawBoolean).toBe(false)

            //2, 4, 2, 5 passed in should return true
            dealerShouldDrawBoolean = dealerShouldDraw([twoHearts,fourSpades,twoHearts,fiveDiamonds])
            expect(dealerShouldDrawBoolean).toBe(true)//
        })
    })
})