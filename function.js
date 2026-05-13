const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");

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
        }

        else {
            result = "YOU LOSE!";
        }

        resultText.innerHTML = `
            You picked: <strong>${playerChoice}</strong><br>
            Computer picked: <strong>${computerChoice}</strong><br><br>
           <h2>${result}</h2>
        `;
    });
}
