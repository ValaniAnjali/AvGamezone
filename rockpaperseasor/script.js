let userScore =0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor="#081b31";;
}
const showWinner =(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText = `you lose! computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice ",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice ",compChoice);

    if(userChoice == compChoice){
        //drawgame
        drawGame();
    }else{
        let userwin = true;
        if(userChoice == "rock"){
        //scissor paper
        userwin = compChoice ==="paper"?false:true;
        }else if(userChoice ==="paper"){
            //rock scissor
            userwin = compChoice ==="scissors"?false:true;
        }else{
            //user: scissor  comp:rock paper
            userwin = compChoice==="rock"?false:true;
        }

        showWinner(userwin,userChoice,compChoice);
    }

}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})