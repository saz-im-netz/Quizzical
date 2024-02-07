import React from "react";
import "./Question.css";

export default function Question({question, allAnswers, id, name, selected, handleChange, gameFinished}){

    function getClassName(index){
        const classNameString = !gameFinished 
            ? "" 
            : name === allAnswers[index] 
                ? "correct" 
                : selected === allAnswers[index] 
                    ? "wrong" 
                    : "disabled"
        return classNameString;
    }

    const inputElements = allAnswers.map((answer, index) => {
        return (
            <div className="answer--wrapper" key={answer + index}>
                <input
                    type="radio"
                    value={answer}
                    name={name}
                    id={id+`-${index}`}
                    checked={selected === answer}
                    onChange={handleChange}
                    disabled={gameFinished}           
                />
                <label 
                    className={getClassName(index)} 
                    htmlFor={id+`-${index}`}
                >
                    {answer}
                </label>
            
            </div>
        )
    })

    return(
        <fieldset key={id} className="question--container">
            <legend>{question}</legend>

            {inputElements}

            <hr></hr>

        </fieldset>
    )
}