 //let firstCard = getRandomCard()
 //let secondCard = getRandomCard()
 let cards = []
 let sum = 0
 let hasBlackJack = false
 let isAlive = false
 let message = ""
 let messageEl = document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let cardsEl = document.getElementById("cards-el")

 let player = {
    Name: "Taras",
    Chips: 140

 }


 let playerEl = document.getElementById("player-el") 
 playerEl.textContent = player.Name + ": $"+ player.Chips 


function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1 
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}



 function startGame() {
    isAlive  = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
 }


 function renderGame() {
    
    cardsEl.textContent = "Cards: "
    
    for (let i = 0;i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
     }

     sumEl.textContent = "Sum: " + sum 
     
     if (sum <= 20) {
         message = ("Do you want to draw a new card?")
         } else if (sum === 21) {
         message = ("You've got Blackjack!!!")
         hasBlackJack = true
         } else   {
         message = ("Out of the game")
         isAlive = false
         }
         messageEl.textContent = (message);

     }
    
 function newCard() {
     if (isAlive === true && hasBlackJack === false) {
     let card = getRandomCard()
     sum += card
     cards.push(card)
     console.log(cards)
     renderGame()
     }   
 }
// function getRandom1to11() {
//  return Math.floor(Math.random() * 11) + 1;
// }


// let feuteredPosted = 
//    ["Chek out my Netflix clone",
//     "Here is code for my Projects",
//     "Ive relached my portfolio"]

// let expriense = 
//     ["CEO in Scrimba webdewelopment",
//     "big Gym fan",
//     "Java Script developer"]

// console.log(expriense[1],[2],[0])