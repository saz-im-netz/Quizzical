import React from "react";

import Question from "./Question";
import {categories} from "./data";
import "./Game.css";

export default function Game({quizArray, setQuizArray, restartGame, allAnswersChecked, setAllAnswersChecked, questionParameters}){

    const[count, setCount] = React.useState(0);
    const[gameFinished, setGameFinished] = React.useState(false);
    const[questionEl, setQuestionEl] = React.useState([]); 

    React.useEffect( ()=>{

        function handleChange(event){
            const {name, value} = event.target;
    
            setQuizArray(prevState => prevState.map(question => {
                return question.correctAnswer === name ?
                    {...question, selected: value} :
                    question
            }))
        }

        setQuestionEl(quizArray.map( part => {
            return (
                <Question 
                    key={part.id}
                    question={part.question} 
                    allAnswers={part.answers} 
                    id={part.id} 
                    name={part.correctAnswer} 
                    selected={part.selected} 
                    handleChange={handleChange}
                    gameFinished={gameFinished}
                />
            )
            
        }));

        return () => {
            !gameFinished ? void(0) : void(0)
        }

    },[quizArray, gameFinished, setQuizArray]);

    React.useEffect( () => {

        function areAllAnswersChecked(array){
            let checker = array.every(item => item.selected !== "");
            return checker;
        }

        setAllAnswersChecked(areAllAnswersChecked(quizArray))

    },[quizArray, setAllAnswersChecked])
    
    function checkAnswers(e){
        e.preventDefault();
        setGameFinished(true);

        quizArray.forEach(question => {
            if(question.correctAnswer === question.selected){
                setCount(prevState => prevState + 1);
            }
        })
   
    }

    function newGame(){
        setGameFinished(false);
        setAllAnswersChecked(false);
        restartGame();
        setCount(0);
    }

    function getDifficulty(parameter){
        if(parameter === ""){
            return "any";
        }
        else{
            return parameter;
        }
    }

    function getCategory(parameter){
        if(parameter === ""){
            return "any";
        }
        else{
            let string = "h";
            for(let i=0; i<categories.length; i++){
                if(parameter === categories[i].key){
                    string = categories[i].topic;
                }
            }
            return string;
        }
    }

    return (
        <div className="Game">

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="116" 
                height="121" 
                viewBox="0 0 158 141" 
                fill="none"
                className="corner right"
            >
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M63.4095 81.3947C35.1213 50.8508 -2.68211 21.7816 1.17274 -19.6933C5.43941 -65.599 39.854 -105.359 82.4191 -123.133C122.797 -139.994 170.035 -130.256 205.822 -105.149C235.947 -84.0141 236.823 -43.8756 246.141 -8.27104C256.17 30.0508 282.521 70.8106 260.501 103.779C237.538 138.159 188.991 143.432 147.931 138.768C112.318 134.723 87.7505 107.677 63.4095 81.3947Z" 
                    fill="#FFFAD1"
                />
            </svg>

            <div className="stats--container">
                <h3>Difficulty: <span>{getDifficulty(questionParameters.difficulty)}</span></h3>
                <h3>Category: <span>{getCategory(questionParameters.category)}</span></h3>
            </div>

            <form className="quiz--container">
                {questionEl}

                <div className="btn--container">
                    {gameFinished?
                        <div className="restart--container">
                            <h3>You scored {count}/5 correct answers</h3>
                            <button 
                                className="restart--btn" 
                                onClick={newGame}
                            >
                                Play again
                            </button>
                        </div>:   
                        <button 
                            className="submit--btn"
                            onClick={checkAnswers}
                            disabled={!allAnswersChecked}
                        >
                            Check answers
                        </button>
                    }
                </div>
            </form>
                
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="75" 
                height="72" 
                viewBox="0 0 148 118" 
                fill="none"
                className="corner left"
            >
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z" 
                    fill="#DEEBF8"
                />
            </svg>
        </div>
    )
}



