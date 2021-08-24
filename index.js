var readLineSync = require("readline-sync")


function printLine(){
  console.log("------------------------------")
}

console.log("Welcome to Money Heist Quiz")
printLine()


var score = 0

var userName = readLineSync.question("Enter your name to begin: ")
console.log("Welcome "+userName+" ")
console.log("Choose correct option")
printLine()



var questionBank = ["1 Who is Sergio Marquina? \na Professor \nb Lisbon \nc Denver\n", "2 “Let the matriarchy begin”: Whose words are these? \na Mumbai \nb Hongkong \nc Nairobi\n", "3 What was the relation between Berlin and The Professor? \na Father \nb StepSis \nc Brother\n", "4 Who was Gandia? \na Hostage \nb Personal Security Guard \nc Crewmate\n","5 Who planned the Bank of Spain heist? \na Professor's Father \nb Professor \nc Berlin\n"
]
var answerBank = ["a", "c", "c", "b", "a"]


function quiz(question, answer){
  for(i=0; i<5; i++){
    question = readLineSync.question(questionBank[i])
    answer = answerBank[i]+"\n\n"
    if(question === answerBank[i]){
      score++
      console.log("Right!!")
    }
    else{
      console.log("Wrong!! Its "+answerBank[i])
      score--
    }
  console.log("Current score: "+score+"\n")
  printLine()
  }

  }
quiz()
console.log("You final score is: "+ score)
console.log("Thanks For Playing Amigo")


