const prompt = require("readline-sync");

function randomiseQuestions(numQuestions, questionArray){
    let positionArray = [] * numQuestions
    for( i = 0; i < numQuestions; i++){
        let randomValue = 0
        do{
           radomValue = Math.round(Math.random() * numQuestions) 
        }while(!(positionArray.indexOf(radomValue)))
        positionArray[i] = randomValue
    }
}