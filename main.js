const prompt = require("readline-sync");

// display questions and get input 
//Murray
function displayQandA(questions, answers,randomNumArray,rounds){
    let choice = Array();
    for(let i = 0; i<rounds; i++){
        console.log("Question " + i + ": " +  questions[randomNumArray[i]]);

        for(let j= 0; j<3; j++){
            console.log(j + ". " + answers[randomNumArray[i]][j] );

        }
        do{
            ans = Number(prompt.question("Enter Choice Here: "));
        }while(ans < 1 || ans > 3)
        choice[i] = (ans -1);

    }
    return choice;
};

// track scores add to object player
function checkResponses(randomNumArray,choices,correctAnsArray,player){
    for(let i = 0; i<choices.length; i++){
        if(choices[i] === correctAnsArray[randomNumArray[i]]){
            player.score += 1;
        };
    }
    return player;
};



choices = displayQandA(questions, answers,randomNumArray, rounds);
player = checkResponses(randomNumArray,choices,correctAnsArray);

