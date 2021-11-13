var readlineSync=require("readline-sync")
const chalk=require('chalk')
const log=console.log
var score=0
var userName=readlineSync.question("whats your name? ")
log(chalk.blue('Welcome!')+chalk.red(userName)+chalk.blue(" To this quiz"))

function play(question,answer)
{
  userAnswer=readlineSync.question(question)
  if(userAnswer==answer)
  {
    console.log("right")
    score=score+1
    console.log(score)
  }
  else
  {
    console.log("wrong")
    log("------------")
  }
  var question=
        [
        { 
          question:"my sirname is",
          answer:"hande"
        },
        {
          question:"Whats my current age?",
          answer:"20"
        }]
        
      for(var i=0;i<question.length;i++)
      {
        currentQuestion=question[i]
        play(currentQuestion.question,currentQuestion.answer);
      }
}