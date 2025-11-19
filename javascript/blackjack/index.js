let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard + 5
let isBlackJack = false
let isAlive = true

if(sum <= 20){
    console.log("Do you want to draw a new card? 🙂")
}else if(sum === 21){
    console.log("Wohoo! you've got Blackjack!!! 🥳")
    isBlackJack = true
}else{
    console.log("You're out of the game 😭")
    isAlive = false
}

console.log(isAlive)

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