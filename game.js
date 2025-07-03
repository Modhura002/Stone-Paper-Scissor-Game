let button=document.querySelector(".move");
let boxes=document.querySelectorAll(".container");

 const compgen=()=>{
    const choices=["rock","paper","scissor"];
   
    return choices[Math.floor(Math.random()) *3];
 }