let button=document.querySelector(".move");
let boxes=document.querySelectorAll(".choices");
let playerS=document.querySelector(".my");
let compS=document.querySelector(".comp");

let playerScore=1;
let compScore=1;

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
        button.innerText="Its a Tie! Both chose same";
        button.style.backgroundColor="rgb(16, 15, 30)";
        
    }
    else if(myChoice=="rock"){
        if(compChoice=="scissor"){
            playerS.innerText=playerScore++;
            button.innerText="You win! Your rock wins against computer's scissor";
             button.style.backgroundColor="rgb(7, 142, 23)";

        }
        else 
            {compS.innerText=compScore++;
                button.innerText="You lose! Computer's paper wins against your rock";
             button.style.backgroundColor="rgb(142, 11, 7)";
            }
        
    }
     else if(myChoice=="rock"){
        if(compChoice=="scissor"){
            playerS.innerText=playerScore++;
            button.innerText="You win! Your rock wins against computer's scissor";
             button.style.backgroundColor="rgb(7, 142, 23)";

        }
        else 
            {compS.innerText=compScore++;
                button.innerText="You lose! Computer's paper wins against your rock";
             button.style.backgroundColor="rgb(142, 11, 7)";
            }
        
    }

     else if(myChoice=="rock"){
        if(compChoice=="scissor"){
            playerS.innerText=playerScore++;
            button.innerText="You win! Your rock wins against computer's scissor";
             button.style.backgroundColor="rgb(7, 142, 23)";

        }
        else 
            {compS.innerText=compScore++;
                button.innerText="You lose! Computer's paper wins against your rock";
             button.style.backgroundColor="rgb(142, 11, 7)";
            }
        
    }
    

 }