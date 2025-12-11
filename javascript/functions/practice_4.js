let hands = ["rock","paper","scissor"]

let random = Math.floor(Math.random() * 3)

function game(){
    return hands[random]
}

console.log(game())