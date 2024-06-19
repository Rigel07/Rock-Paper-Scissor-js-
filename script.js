// 🪨 📃 ✂️
// you can also track progress in console window
const choices = ["rock", "paper", "scissor"];
const user = document.getElementById("user");
const comp = document.getElementById("comp");
const resultWindow = document.getElementById("result");

// score counter (Default)
let userScore = 0;
let compScore = 0;

// refresh the page when user clicks on #title
function refreshPage(){
    window.location.reload();
}

// get user's and computer's choices stored
function getChoice(element){
    let userChoice = element.id;
    console.log(`User choice = ${userChoice}`);

    const compChoice = choices[Math.floor(Math.random() * choices.length)]; // randomly choose an item from the array
    console.log(`Computer choice = ${compChoice}`);
    
    checkWinner(userChoice, compChoice);
}

// compare and check
function checkWinner(userChoice, compChoice){
    // userChoice == rock
    if(userChoice === "rock" && compChoice === "paper"){
        compScore++;
        user.innerHTML = userScore;
        comp.innerHTML = compScore;
        resultWindow.innerHTML = `User: ${userChoice}, Computer: ${compChoice}<br>Computer won.`;
        console.log(`Computer won. ${userScore}, ${compScore}`);
    }
    else if(userChoice === "rock" && compChoice === "scissor"){
        userScore++;
        user.innerHTML = userScore;
        comp.innerHTML = compScore;
        resultWindow.innerHTML = `User: ${userChoice}, Computer: ${compChoice}<br>User won.`;
        console.log(`User won. ${userScore}, ${compScore}`);
    }

    // userChoice == paper
    else if(userChoice === "paper" && compChoice === "rock"){
        userScore++;
        user.innerHTML = userScore;
        comp.innerHTML = compScore;
        resultWindow.innerHTML = `User: ${userChoice}, Computer: ${compChoice}<br>User won.`;
        console.log(`USer won. ${userScore}, ${compScore}`);
    }
    else if(userChoice === "paper" && compChoice === "scissor"){
        compScore++;
        user.innerHTML = userScore;
        comp.innerHTML = compScore;
        resultWindow.innerHTML = `User: ${userChoice}, Computer: ${compChoice}<br>Computer won.`;
        console.log(`Computer won. ${userScore}, ${compScore}`);
    }

    // userChoice == scissor
    else if(userChoice === "scissor" && compChoice === "rock"){
        compScore++;
        user.innerHTML = userScore;
        comp.innerHTML = compScore;
        resultWindow.innerHTML = `User: ${userChoice}, Computer: ${compChoice}<br>Computer won.`;
        console.log(`Computer won. ${userScore}, ${compScore}`);
    }
    else if(userChoice === "scissor" && compChoice === "paper"){
        userScore++;
        user.innerHTML = userScore;
        comp.innerHTML = compScore;
        resultWindow.innerHTML = `User: ${userChoice}, Computer: ${compChoice}<br>User won.`;
        console.log(`User won. ${userScore}, ${compScore}`);
    }

    // tie or draw
    else{
        user.innerHTML = userScore;
        comp.innerHTML = compScore;
        resultWindow.innerHTML = `User: ${userChoice}, Computer: ${compChoice}<br>The game was draw.`;
        console.log(`The game was draw.`);
    }
}