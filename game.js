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

        
    })
  })

 const playGame=(compChoice,myChoice)=>{

 }