let button=document.querySelector(".move");
let boxes=document.querySelectorAll(".container");

let playerScore=0;
let compScore=0;

 const compChoice=()=>{
    const choices=["rock","paper","scissor"];
   
    return choices[Math.floor(Math.random()*3)];
 }

  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        let myChoice=box.getAttribute("#id");
        let compChoice=compChoice();
        playGame(compChoice,myChoice);

        
    });
  });

 const playGame=(compChoice,myChoice)=>{
    if(compChoice===myChoice){
        button.innerText="Its a Tie";
        button.style.backgroundColor="rgb(16, 15, 30)";
    }

 }