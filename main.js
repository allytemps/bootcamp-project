//Installing readline-sync
const prompt = require("readline-sync");
// Declare Variables and Arrays
let correctAnswers = ["Jupiter", "Microsoft", "42", "10,080", "Mascarpone Cheese", "China", "Bong Joon-ho", "Cristiano Ronaldo", "Doctor Who", "Avocado", "Italy", "Chickpeas", "Spinach", "Sushi", "Cheese", "Almonds"];
let answers = [["Mars", "Earth", "Jupiter"], ["Microsoft", "Google", "Samsung"], ["42", "64", "48"], ["12,180", "10,080", "11,080"], ["Cream Cheese", "Mascarpone Cheese", "Blue Cheese"], ["India", "China", "Italy"], ["Bong Joon-ho", "Christopher Nolan", "Tim Burton"], ["Lionel Messi", "Zlatan Ibrahimovic", "Cristiano Ronaldo"], ["Doctor Who", "Star Trek", "Stranger Things"], ["Salt", "Lime Juice", "Avocado"], ["Spain", "Italy", "France"], ["Chickpeas", "Garlic", "Tahini"], ["Carrots", "Rocket", "Spinach"], ["Noodles", "Sushi", "Eggs"], ["Cheese", "Butter", "Olive Oil"], ["Peanuts", "Hazelnut", "Almonds"]];
let question = ["What is the largest planet in our solar system?", "What software company is headquartered in Redmond, Washington?", "How many dots appear on a pair of dice?", "How many minutes are in a full week?", "What is the primary ingredient in the Italian dessert tiramisu?", "Which country is credited with inventing ice cream?", "Who is the director of the critically acclaimed film “Parasite”?", "Who was the worlds highest-paid athlete in 2023?", "Which sci-fi series features a police box called the TARDIS?", "What is the main ingredient in guacamole?", "Which country is famous for its pasta dishes such as spaghetti and lasagna?", "What is the primary ingredient in hummus?", "Which vegetable is known for its association with Popeye the Sailor?", "What is the national dish of Japan?", "What type of food is brie?", "Which nut is used to make marzipan?"];
let numberOfRounds = null;
let leaderboard = [];
//Asks the users to select how manuy questions they would like
numberOfRounds = Number(prompt.question("How many people would you like to play this quiz? "));
//Function using a do while loop to ask user how many questions they would like in their game and return that variable
function questionAmount(){
do{
    numOfQuestions = Number(prompt.question("Please enter 5, 10 or 15: "));
    }while(numOfQuestions != 5 && numOfQuestions != 10 && numOfQuestions != 15)
    return numOfQuestions};

//Function to display the question and question number alongside the answers with their corresponding number depending on placement in the array
function displayQandA(questions, answers,randomNumArray,rounds){
    let choice = Array();
    for(let i = 0; i<rounds; i++){
        console.log("Question " + (i + 1) + ": " +  questions[randomNumArray[i]]);

        for(let j= 0; j<3; j++){
            console.log((j + 1) + ". " + answers[randomNumArray[i]][j]);

        }
        //Input validation to ensure they enter the correct corresponding number to answer
        do{
            ans = Number(prompt.question("Enter Choice Here: "));
        }while(ans < 1 || ans > 3)
        choice[i] = (ans -1);
    }
    return choice;
};

// track and update how many questions the user has gotten right, so at they end they can see how they did/how they did compared to other users
function checkResponses(randomNumArray,choices,correctAnsArray,questionNum,answers){
    let score = 0
    for(let i = 0; i<questionNum; i++){
        if(answers[randomNumArray[i]][choices[i]] == correctAnsArray[randomNumArray[i]]){
            score += 1;
        };
    };
    return score;
};

//Function that will randomise the order of the array and output the questions randomly to support replayability so the useer doesnt get the same question order every time
function randomiseQuestions(){
    let positionArray = [];
    for(let i = 0; i < 15; i++){
        let randomValue = 0;
        do{
           randomValue = Math.round(Math.random() * 15) ;
        }while(positionArray.includes(randomValue));
        positionArray[i] = randomValue;
    }
    return positionArray;
}

//Function to update the leaderboard with the players object to store multiple names and scores
function updateLeaderboard(name, playerScore,playerGrade){
    leaderboard.push({Name: name, Score: playerScore, Grade: playerGrade});
};
// order leaderboard high to low/ see who's done the best.
function insertSort(arr){
    for (let i = 0; i < arr.length; i += 1) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j].Score > temp.Score) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
  }
  return arr.reverse();
    }

function grade(player, numQuestions){
    let percent = Number((player.Score /numQuestions)*100);
    let Grade = undefined;
    switch(true){
        case percent >= 0 && percent < 40:
            Grade = "F";
            break;
        case percent >= 40 && percent <50:
            Grade = "D";
            break;
        case percent >= 50 && percent <60:
            Grade = "C";
            break;
        case percent >= 60 && percent <70:
            Grade = "B";
            break;
        case percent >= 70 && percent <=100:
            Grade = "A";
            break;
        default:
            console.log("ERROR");
    } 
    return Grade;
}
//functions to store the user name and score so we can use it for the leaderboard
function setLeaderboard(name, playerScore,playerGrade){
    leaderboard[i] = ({Name: name, Score: playerScore, Grade: playerGrade});
}

let questionNum = questionAmount();
//Conditional loop to allow user/s to play the game with others or multiple times
for(i = 0; i < numberOfRounds; i++){
    let playerName = prompt.question("PLayer " + (i+1) + " Enter Username Here: ")
    //Call all functions to main code and display output
    randomNumArray = randomiseQuestions();
    choices = displayQandA(question, answers,randomNumArray, questionNum);
    score = checkResponses(randomNumArray,choices,correctAnswers,questionNum,answers);
    updateLeaderboard(playerName, score, undefined);
    gradeVar = grade(leaderboard[i],questionNum);
    setLeaderboard(playerName, score, gradeVar)
    console.log("\n\n\n\n");};

leaderboard = insertSort(leaderboard);
// /n used to create some space between the code to improve the readability
console.log("\n\n\n\n");
//A prompt to show the score board/ see how they've done overall and against others
console.log( "============SCORE BOARD============");
for(let i = 0; i< leaderboard.length; i++){
        console.log((i + 1), "place: " + " " + leaderboard[i].Name + " got " + leaderboard[i].Score, "questions right!");
    }