let homeScore = document.getElementById("home-score")
homeScore.textContent = 0;

let guestScore = document.getElementById("guest-score")
guestScore.textContent = 0;

// ADDING SCORES

function addOneHome() {    
    let newScore = Number(homeScore.textContent)
    newScore += 1
    homeScore.textContent = newScore
}

function addTwoHome() {    
    let newScore = Number(homeScore.textContent)
    newScore += 2
    homeScore.textContent = newScore
}

function addThreeHome() {    
    let newScore = Number(homeScore.textContent)
    newScore += 3
    homeScore.textContent = newScore
}

function addOneGuest() {    
    let newScore = Number(guestScore.textContent)
    newScore += 1
    guestScore.textContent = newScore
}

function addTwoGuest() {    
    let newScore = Number(guestScore.textContent)
    newScore += 2
    guestScore.textContent = newScore
}

function addThreeGuest() {    
    let newScore = Number(guestScore.textContent)
    newScore += 3
    guestScore.textContent = newScore
}