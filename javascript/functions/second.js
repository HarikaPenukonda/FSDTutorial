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

console.log(myPoints)




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