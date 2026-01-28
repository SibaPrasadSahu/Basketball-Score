let homeScore = 0
let guestScore = 0

let homeScoreElement = document.getElementById("home-score")
let guestScoreElement = document.getElementById("guest-score")

function homePlusOne() {
    homeScore += 1
    homeScoreElement.innerText = homeScore
}

function homePlusTwo (){
    homeScore += 2
    homeScoreElement.textContent = homeScore
}

function homePlusThree() {
    homeScore += 3
    homeScoreElement.textContent = homeScore
}

function guestPlusOne() {
    guestScore += 1
    guestScoreElement.textContent = guestScore
}

function guestPlusTwo() {
    guestScore += 2
    guestScoreElement.textContent = guestScore
}

function guestPlusThree() {
    guestScore += 3
    guestScoreElement.textContent = guestScore
}