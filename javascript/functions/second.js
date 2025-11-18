let num1 = 8
let num2 = 2

document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").innerText = num2

let sumEl = document.getElementById("sum-el")

function add(){
    let result = num1 + num2
    sumEl.innerText = "Sum : " + result

}

function subract(){
    let result = num1 - num2
    sumEl.innerText = "Sum : " + result

}

function multiply(){
    let result = num1 * num2
    sumEl.innerText = "Sum : " + result

}

function divide(){
    let result = num1 / num2
    sumEl.innerText = "Sum : " + result
}

let errorEl = document.getElementById("error")

function error(){
    errorEl.innerText = "something went wrong, please try again"
}

let myPoints = 3

function add3Points(){
    myPoints += 3
}

function remove1Point(){
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

//console.log(myPoints)




// let myName = 'Linda'
// let greeting = 'hi there'

// function greet(){
//     console.log(greeting + ' ,' + myName + '!')
// }

// greet()



// let firstName = 'Harika'
// let lastName =  'Penukonda'

// let fullName = firstName + " " +lastName

// console.log('my name is ', fullName)