const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");
const computerChoices = ["rock", "paper", "scissors"];
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function () {
        const playerChoice = choices[i].id;
        const randomIndex = Math.floor(Math.random() * 3);
        const computerChoice = computerChoices[randomIndex];
        let result = "";

        if KALAU DRAW {
            result = "DRAW!";
        }
        else if (
            (KALAU PLAYER BATU DAN KOMPUTER GUNTING) ||
            (KALAU PLAYER KERTAS DAN KOMPUTER BATU) ||
            (KALAU PLAYER GUNTING DAN KOMPUTER KERTAS)
        ) {
            result = "YOU WIN!";
        }
            
        resultText.innerHTML = `
            You picked: <strong>${playerChoice}</strong><br>
            Computer picked: <strong>${computerChoice}</strong><br><br>
            <h2>${result}</h2>
        `;
    });
}
