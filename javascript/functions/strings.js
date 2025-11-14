// let username = "Harika"

// let message = 'you have 3 notifications'

// let messageToUser = username + " , " + message

// console.log(messageToUser)

let welcomeEl = document.getElementById('welcome-el')
console.log(welcomeEl)
let myName = "Harika"
let greeting = "Good Morning!"

let message = myName + " , " + greeting
welcomeEl.innerText = message

welcomeEl.innerText += " Top of the morning y'all"