const prompt = require("readline-sync");

// Declare Variables and Arrays
let correctAnswers = ["Jupiter", "Microsoft", "42", "10,080", "Mascarpone Cheese", "China", "Bong Joon-ho", "Cristiano Ronaldo", "Doctor Who", "Avocado", "Italy", "Chickpeas", "Spinach", "Sushi", "Cheese", "Almonds"];
let answers = [["Mars", "Earth", "Jupiter"], ["Microsoft", "Google", "Samsung"], ["42", "64", "48"], ["12,180", "10,080", "11,080"], ["Cream Cheese", "Mascarpone Cheese", "Blue Cheese"], ["India", "China", "Italy"], ["Bong Joon-ho", "Christopher Nolan", "Tim Burton"], ["Lionel Messi", "Zlatan Ibrahimovic", "Cristiano Ronaldo"], ["Doctor Who", "Star Trek", "Stranger Things"], ["Salt", "Lime Juice", "Avocado"], ["Spain", "Italy", "France"], ["Chickpeas", "Garlic", "Tahini"], ["Carrots", "Rocket", "Spinach"], ["Noodles", "Sushi", "Eggs"], ["Cheese", "Butter", "Olive Oil"], ["Peanuts", "Hazelnut", "Almonds"]];
let question = ["What is the largest planet in our solar system?", "What software company is headquartered in Redmond, Washington?", "How many dots appear on a pair of dice?", "How many minutes are in a full week?", "What is the primary ingredient in the Italian dessert tiramisu?", "Which country is credited with inventing ice cream?", "Who is the director of the critically acclaimed film “Parasite”?", "Who was the worlds highest-paid athlete in 2023?", "Which sci-fi series features a police box called the TARDIS?", "What is the main ingredient in guacamole?", "Which country is famous for its pasta dishes such as spaghetti and lasagna?", "What is the primary ingredient in hummus?", "Which vegetable is known for its association with Popeye the Sailor?", "What is the national dish of Japan?", "What type of food is brie?", "Which nut is used to make marzipan?"];
let numberOfRounds = null;
let leaderboard = [];

numberOfRounds = Number(prompt.question("How many people would you like to play this quiz?"));

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
            console.log((j + 1) + ". " + answers[randomNumArray[i]][j] );

        }
        //Input validation to ensure they enter the correct corresponding number to answer
        do{
            ans = Number(prompt.question("Enter Choice Here: "));
        }while(ans < 1 || ans > 3)
        choice[i] = (ans -1);

    }
    return choice;
};

// track and update scores 
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
function updateLeaderboard(name, playerScore){
    leaderboard.push({Name: name, Score: playerScore});
};
//Conditional loop to allow user/s to play the game with others or multiple times
for(i = 0; i < numberOfRounds; i++){
let playerName = prompt.question("Enter Username Here: ")
//Call all functions to main code and display output
let questionNum = questionAmount();
randomNumArray = randomiseQuestions();
choices = displayQandA(question, answers,randomNumArray, questionNum);
score = checkResponses(randomNumArray,choices,correctAnswers,questionNum,answers);
updateLeaderboard(playerName, score)};

console.log(leaderboard)