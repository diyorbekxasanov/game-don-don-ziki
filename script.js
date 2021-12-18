window.addEventListener("DOMContentLoaded", () => {
    const choice = document.querySelectorAll(".choice")
    const score = document.querySelector("#score")
    const modal = document.querySelector(".modal")
    const result = document.querySelector("#result")
    const restart = document.querySelector("#restart")
    const scoreBoard = {
        player:0,
        draw:0,
        computer:0
    }

    function play(event) {
        restart.style.display = "inline-block"
        const playChoise=event.target.id
        const computerChoise = getComputerChoise()
        const winner = getWinner(playChoise,computerChoise)
        showWinner(winner,computerChoise)
    }

    function getComputerChoise() {
        const random = Math.random()
        if (random < 0.34) {
            return "rock"
        } else if (random <= 0.67) {
            return "paper"
        } else {
            return "scissors"
        }
    }

    function getWinner(p, c) {
        if (p === c) {
            return "draw"
        } else if (p === "rock") {
            if (c === "paper") {
                return "computer"
            } else {
                return "player"
            }
        } else if (p === "paper") {
            if (c === "scissors") {
                return "computer"
            } else {
                return "player"
            }
        } else if (p === "scissors") {
            if (c === "rock") {
                return "computer"
            } else {
                return "player"
            }
        }
    }

    function showWinner(winner, computerChoise) {
        if (winner === "player") {
            scoreBoard.player++
            result.innerHTML = `
                <h1 class="text-win">Uttingay!!!</h1>
                <i class="fas fa-hand-${computerChoise} fa-10x"></i>
                <p >Man  shuni tanlavadim</p>
            `
            // <strong> ${computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1)} </strong>

        } else if (winner === "computer") {
            scoreBoard.computer++
            result.innerHTML = `
                <h1 class="text-lose">Uttirding!!!</h1>
                <i class="fas fa-hand-${computerChoise} fa-10x"></i>
                <p >Man  shuni tanlavadim</p>
            `
            // <strong> ${computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1)} </strong>

        } else {
            scoreBoard.draw++
            result.innerHTML = `
                <h1 class="text-draw">Danglik!!!</h1>
                <i class="fas fa-hand-${computerChoise} fa-10x"></i>
                <p >Manam shuni tanlavadim</p>
            `
            // <strong> ${computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1)} </strong>

        }

        score.innerHTML = `
            <p>O'yinchi: ${scoreBoard.player} </p>
            <p>Danglik: ${scoreBoard.draw} </p>
            <p>Diyor: ${scoreBoard.computer} </p>
        `
        modal.style.display = "block"
    }

    function restartScore() {
        scoreBoard.player = 0
        scoreBoard.draw=0
        scoreBoard.computer = 0
        score.innerHTML = `
        <p>O'yinchi: ${scoreBoard.player} </p>
        <p>Danglik: ${scoreBoard.draw} </p>
        <p>Diyor: ${scoreBoard.computer} </p>
    `
    }
    function clearModal(event) {
        if(event.target==modal){
            modal.style.display="none"
        }
    }

    choice.forEach(choice=>choice.addEventListener("click", play))
    window.addEventListener("click", clearModal)
    restart.addEventListener("click",restartScore)


})