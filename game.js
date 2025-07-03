let button = document.querySelector(".move");
let boxes = document.querySelectorAll(".choices");
let playerS = document.querySelector(".my");
let compS = document.querySelector(".comp");
let resetbtn = document.querySelector(".reset");

let playerScore = 0;
let compScore = 0;

const compChoice = () => {
  const choices = ["rock", "paper", "scissor"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let myChoice = box.getAttribute("id");
    let computerChoice = compChoice();
    playGame(computerChoice, myChoice);
  });
});

const playGame = (compChoice, myChoice) => {
  if (compChoice == myChoice) {
    button.innerText = "Its a Tie! Both chose same";
    button.style.backgroundColor = "rgb(16, 15, 30)";
  } else if (myChoice == "rock") {
    if (compChoice == "scissor") {
      playerScore++;
      playerS.innerText = playerScore;
      button.innerText = "You win! Your rock wins against computer's scissor";
      button.style.backgroundColor = "rgb(7, 142, 23)";
    } else {
      compScore++;
      compS.innerText = compScore;
      button.innerText = "You lose! Computer's paper wins against your rock";
      button.style.backgroundColor = "rgb(142, 11, 7)";
    }
  } else if (myChoice == "paper") {
    if (compChoice == "rock") {
      playerScore++;
      playerS.innerText = playerScore;
      button.innerText = "You win! Your paper wins against computer's rock";
      button.style.backgroundColor = "rgb(7, 142, 23)";
    } else {
      compScore++;
      compS.innerText = compScore;
      button.innerText = "You lose! Computer's scissor wins against your paper";
      button.style.backgroundColor = "rgb(142, 11, 7)";
    }
  } else if (myChoice == "scissor") {
    if (compChoice == "paper") {
      playerScore++;
      playerS.innerText = playerScore;
      button.innerText = "You win! Your scissor wins against computer's paper";
      button.style.backgroundColor = "rgb(7, 142, 23)";
    } else {
      compScore++;
      compS.innerText = compScore;
      button.innerText = "You lose! Computer's rock wins against your scissor";
      button.style.backgroundColor = "rgb(142, 11, 7)";
    }
  }
};
resetbtn.addEventListener("click", () => {
  button.innerText = "Play your move";
  button.style.backgroundColor = "rgb(16, 15, 30)";
  playerScore = 0;
  compScore = 0;
  playerS.innerText = 0;
  compS.innerText = 0;
});
