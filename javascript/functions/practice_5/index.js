let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

function getRandom(){
    let random = Math.floor(Math.random() * 17)
    return fighters[random]
}


fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    let firstEmoji = getRandom()
    let secondEmoji = getRandom()
    stageEl.textContent = firstEmoji + " VS " + secondEmoji
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})
