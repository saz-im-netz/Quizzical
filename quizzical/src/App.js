import React from "react";
import {v4 as uuidv4} from "uuid";
import {decode} from "html-entities";
import Game from "./Components/Game";
import Start from "./Components/Start";
import './App.css';


export default function App() {

  const[hasGameStarted, setHasGameStarted] = React.useState(false);
  const[quizArray, setQuizArray] = React.useState([]);
  const[questionParameters, setQuestionParameters] = React.useState([{difficulty: "", category: ""}]);
  const[allAnswersChecked, setAllAnswersChecked]  = React.useState(false);
  

  React.useEffect( ()=>{

    function getApiTag(questionParameters){
      let ApiString = "https://opentdb.com/api.php?amount=5&type=multiple"
      if(questionParameters[0].difficulty){
        ApiString = ApiString+'&difficulty='+questionParameters[0].difficulty;
      }
      
      if(questionParameters[0].category){
        ApiString = ApiString+'&category='+questionParameters[0].category;
      }
      return ApiString
    }

    async function getQuestions(){
      
        const response = await fetch(getApiTag(questionParameters));
        const data = await response.json();

        setQuizArray( data.results.map(component => {
            return(
                {
                    id: uuidv4(),
                    question: decode(component.question),
                    answers: insertAnswerAtRandomPosition(decode(component.incorrect_answers), decode(component.correct_answer)),
                    correctAnswer: decode(component.correct_answer),
                    selected: ""                 
                }
            )
            
        }))  
    }

    if(hasGameStarted){
      getQuestions()
    }

},[hasGameStarted, questionParameters]);

function insertAnswerAtRandomPosition(arr, answer){
    let randomIndex = Math.floor( Math.random() * (arr.length + 1) );
    return arr.toSpliced(randomIndex, 0, answer);
}

  function startGame(){
    setHasGameStarted(true);
  }

  function restartGame(){
    setHasGameStarted(false);
  }

  return (
    <div className="App">
        {
          hasGameStarted ?

            <Game 
              restartGame={()=>restartGame()} 
              quizArray={quizArray} 
              setQuizArray={setQuizArray} 
              allAnswersChecked={allAnswersChecked} 
              setAllAnswersChecked={setAllAnswersChecked}
              questionParameters={questionParameters[0]}
            /> :

            <Start 
              startGame={()=>startGame()} 
              questionParameters={questionParameters} 
              setQuestionParameters={setQuestionParameters}
            />
        }
    </div>
  );
}