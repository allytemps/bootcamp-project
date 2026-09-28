const prompt = require("readline-sync");

let correctAnswers = ["Jupiter", "Microsoft", "42", "10,080", "Mascarpone Cheese", "China", "Bong Joon-ho", "Christiano Ronaldo", "Doctor Who", "Avocado", "Italy", "Chickpeas", "Spinach", "Sushi", "Cheese", "Almonds"];
let answers = [["Mars", "Earth", "Jupiter"], ["Microsoft", "Google", "Samsung"], ["42", "64", "48"], ["12,180", "10,080", "11,080"], ["Cream Cheese", "Mascarpone Cheese", "Blue Cheese"], ["India", "China", "Italy"], ["Bong Joon-ho", "Christopher Nolan", "Tim Burton"], ["Lionel Messi", "Zlatan Ibrahimovic", "Christiano Ronaldo"], ["Doctor Who", "Star Trek", "Stranger Things"], ["Salt", "Lime Juice", "Avocados"], ["Spain", "Italy", "France"], ["Chickpeas", "Garlic", "Tahini"], ["Carrots", "Rocket", "Spinach"], ["Noodles", "Sushi", "Eggs"], ["Cheese", "Butter", "Olive Oil"], ["Peanuts", "Hazelnut", "Almonds"]];
let question = ["What is the largest planet in our solar system?", "What software company is headquartered in Redmond, Washington?", "How many dots appear on a pair of dice?", "How many minutes are in a full week?", "What is the primary ingredient in the Italian dessert tiramisu?", "Which country is credited with inventing ice cream?", "Who is the director of the critically acclaimed film “Parasite”?", "Who was the worlds highest-paid athlete in 2023?", "Which sci-fi series features a police box called the TARDIS?", "What is the main ingredient in guacamole?", "Which country is famous for its pasta dishes such as spaghetti and lasagna?", "What is the primary ingredient in hummus?", "Which vegetable is known for its association with Popeye the Sailor?", "What is the national dish of Japan?", "What type of food is brie?", "Which nut is used to make marzipan?"];

function randomiseQuestions(numQuestions){
    let positionArray = [];// * numQuestions;
    for(let i = 0; i < numQuestions; i++){
        let randomValue = 0;
        do{
           randomValue = Math.round(Math.random() * (numQuestions -1)) ;
        }while(positionArray.includes(randomValue));
        positionArray[i] = randomValue;
    }
    return positionArray;
}

randomNumArray = randomiseQuestions(numQuestions);
console.log(randomNumArray);
choices = displayQandA(questions, answers,randomNumArray, rounds);
player = checkResponses(randomNumArray,choices,correctAnsArray);
