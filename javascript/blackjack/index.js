
let cards = []
let sum = 0
let isBlackJack = false
let isAlive = false
let message = ""

let player = {
    my_name : "Micheal Scott",
    chips : 142
}


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.my_name + " : " + player.chips

function getRandom(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1 ){
        return 11
    }else{
        return randomNumber
    }
    
}

function startGame(){
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards : "

    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

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
    
}

function newCard(){
   if(isAlive === true && isBlackJack === false){
    let card = getRandom()
    sum += card
    cards.push(card)
    renderGame()
   }
    //startGame()
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