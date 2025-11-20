

function rollDice(){
    let randomNumber = (Math.floor(Math.random() * 6)) + 1
    return randomNumber
}

console.log(rollDice())

// generates a random number between 0 and 1
//console.log(randomNumber) // 0 to 5

// let flooredNumber = Math.floor(5.832620107917066) // 5
// console.log(flooredNumber)

// let player1Racetime = 102
// let player2Racetime = 107

// function fastestRaceTime(){
//     if(player1Racetime<player2Racetime){
//         return player1Racetime
//     }else if(player2Racetime<player1Racetime){
//         return player2Racetime
//     }else{
//         return player1Racetime
//     }
// }

// let fastestPlayer = fastestRaceTime()
// console.log(fastestPlayer)

// function totalTime(){
//     return player1Racetime + player2Racetime
// }

// let totalRaceTime = totalTime()
// console.log(totalRaceTime)