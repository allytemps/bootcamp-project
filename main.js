const prompt = require("readline-sync");

// display questions and get input 

function displayQandA(){

    for(let i = 0; i<10; i++){
        console.log("Question " + i + ": " +  questions[i]);

        for(let j= 0; j<4; j++){
            console.log(j + ". " + answers[i][j] );

        }
        ans = Number(prompt.question("Enter Choice Here: "));
        choice[i] = ans
        
    }
};

input = displayQandA();