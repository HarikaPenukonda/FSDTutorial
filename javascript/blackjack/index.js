let firstCard = 12
let secondCard = 2
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let isBlackJack = false
let isAlive = true
let message = ""


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){

    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "you've got Blackjack!"
        isBlackJack = true
    }else{
        message = "You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
    sumEl.textContent = "Sum : " + sum
    cardsEl.textContent = "Cards : " + cards[0] + " " + cards[1]
}

function newCard(){
   
    let card =  10
    sum += card
    cards.push(card)
    console.log(cards)
    startGame()
}


// let age = 101

// if(age < 100){
//     console.log("Not Eligible")
// }else if(age === 100){
//     console.log("Here is your birthday card from the King!")
// }else{
//     console.log("Not eligible, you have already recieved one")
// }

// let age = 15

// if(age >= 21){
//     console.log("Welcome!")
// }else{
//     console.log("you cannot enter the club")
// }