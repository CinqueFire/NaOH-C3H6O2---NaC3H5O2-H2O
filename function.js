const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupMessage = document.getElementById("popup-message");
const closePopup = document.getElementById("closePopup");

const computerChoices = ["rock", "paper", "scissors"];



for (let i = 0; i < choices.length; i++) {

    choices[i].addEventListener("click", function () {

        const playerChoice = choices[i].id;

        const randomIndex = Math.floor(Math.random() * 3);
        const computerChoice = computerChoices[randomIndex];

        let result = "";


        // DRAW
        if (playerChoice === computerChoice) {

            result = "DRAW!";
        }


        // WIN
        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {

            result = "YOU WIN!";

            // START CONFETTI
            startConfetti();
        }


        // LOSE
        else {

            result = "YOU LOSE!";
        }



        // // NORMAL RESULT TEXT
        // resultText.innerHTML = `
        //     You picked: <strong>${playerChoice}</strong><br>
        //     Computer picked: <strong>${computerChoice}</strong><br><br>
        //     <h2>${result}</h2>
        // `;



        // SHOW POPUP
        popup.classList.remove("hidden");

        popupTitle.innerText = result;

        popupMessage.innerText =
            `You picked ${playerChoice} and your opponent picked ${computerChoice}`;
    });
}



// CLOSE POPUP
closePopup.addEventListener("click", function () {

    popup.classList.add("hidden");
});



/* ========================= */
/* CONFETTI EFFECT */
/* ========================= */

const canvas = document.getElementById("confetti");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];



function startConfetti() {

    confettiPieces = [];

    for (let i = 0; i < 150; i++) {

        confettiPieces.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height - canvas.height,

            size: Math.random() * 10 + 5,

            speed: Math.random() * 3 + 2,

            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    animateConfetti();


    // STOP AFTER 3 SECONDS
    setTimeout(() => {

        confettiPieces = [];

        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }, 3000);
}



function animateConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    confettiPieces.forEach(piece => {

        ctx.fillStyle = piece.color;

        ctx.fillRect(piece.x, piece.y, piece.size, piece.size);

        piece.y += piece.speed;


        if (piece.y > canvas.height) {

            piece.y = -10;
        }
    });


    if (confettiPieces.length > 0) {

        requestAnimationFrame(animateConfetti);
    }
}
