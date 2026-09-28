const prompt = require("readline-sync");

// display questions and get input 
//Murray
function displayQandA(questions, answers){
    let choice = Array();
    for(let i = 0; i<15; i++){
        console.log("Question " + i + ": " +  questions[i]);

        for(let j= 0; j<3; j++){
            console.log(j + ". " + answers[i][j] );

        }
        ans = Number(prompt.question("Enter Choice Here: "));
        choice[i] = ans;

    }
    return choice;
};

choices = displayQandA(questions, answers);


