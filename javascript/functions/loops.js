let greeting = ["hello","my","name","is","Harika"]
let greetingEl = document.getElementById("greeting-el")

for(let i=0; i<greeting.length; i++){
    //console.log(greeting[i])
    // greetingEl.textContent = greeting[i] --> overrides the data and displays only the last item
    greetingEl.textContent += greeting[i] + " " // to keep intact add the item to the previous item
}


// for(let count = 1; count <= 10; count++){
//     console.log(count)
// }

// let cards = [3,7,9]

// for(let i=0; i<cards.length; i++){
//     console.log(cards[i])
// }

let experience = [
    "software engineer in statefarm",            
    "Teaching Assistant in University of Dayton",
    "Masters in computer science",
    "Associate software engineer in TechMahindra"
]

for(let i = 0; i<experience.length; i++){
    //console.log(experience[i])
}