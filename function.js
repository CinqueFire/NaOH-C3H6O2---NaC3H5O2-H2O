const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupMessage = document.getElementById("popup-message");
const closePopup = document.getElementById("closePopup");
const jumpscareGif = document.getElementById("jumpscare-gif");
const computerChoices = ["rock", "paper", "scissors"];
for (let i = 0; i < choices.length; i++) {

    choices[i].addEventListener("click", function () {

        const playerChoice = choices[i].id;

        const randomIndex = Math.floor(Math.random() * 3);

        const computerChoice = computerChoices[randomIndex];

        let result = "";
        if (playerChoice === computerChoice) {

            result = "DRAW!";
        }

        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {

            result = "YOU WIN!";
            startConfetti();
        }
        else {

            result = "YOU LOSE!";
            const randomChance = Math.floor(Math.random() * 100);
            if (randomChance =< 40) {
                jumpscareGif.style.display = "block";
                jumpscareGif.src = "fnaf-2-foxy.gif";

        }
        popup.classList.remove("hidden");
        popupTitle.innerText = result;
        popupMessage.innerText =
            `You picked ${playerChoice} and your opponent picked ${computerChoice}`;
    });
}
closePopup.addEventListener("click", function () {

    popup.classList.add("hidden");

    jumpscareGif.style.display = "none";
});
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
