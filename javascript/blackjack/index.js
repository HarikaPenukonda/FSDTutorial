let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let isBlackJack = false
let isAlive = true
let message = ""

function startGame(){

    if(sum <= 20){
        message = "Do you want to draw a new card? 🙂"
    }else if(sum === 21){
        message = "Wohoo! you've got Blackjack!!! 🥳"
        isBlackJack = true
    }else{
        message = "You're out of the game 😭"
        isAlive = false
    }
    
    console.log(message)
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