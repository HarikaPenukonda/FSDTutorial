/*
    1. initalize the count as 0
    2. listen for the click on the increment button
    3. increment th count variable with the clicks on the button
    4. change the count-el in the HTML to relect the new count

*/


let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

console.log(countEl) // <h1 id="count-el">0</h1>

let count = 0
function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let result = count + "-" 
    saveEl.innerHTML += result 
}



// // document.getElementById("count-el").innerText = 5
// // let count = 0
// // console.log(count)

// // let myAge = 30
// // // console.log(myAge)

// // let humanDogRatio = 2
// // let myDogAge = myAge * humanDogRatio

// // console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 25
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 70
// console.log(bonusPoints)