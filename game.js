let button=document.querySelector(".move");
let boxes=document.querySelectorAll(".choices");

let playerScore=0;
let compScore=0;

 const compChoice=()=>{
    const choices=["rock","paper","scissor"];
    let random=Math.floor(Math.random()*3);
    console.log("computer chose" ,choices[random]);
   
    return choices[random];
 }

  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        let myChoice=box.getAttribute("id");
        console.log("i chose ",myChoice);
        let computerChoice=compChoice();
        playGame(computerChoice,myChoice);

        
    });
  });

 const playGame=(compChoice,myChoice)=>{
    if(compChoice==myChoice){
        button.innerText="Its a Tie";
        button.style.backgroundColor="rgb(16, 15, 30)";
    }

 }