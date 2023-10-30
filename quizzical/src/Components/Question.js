import React from "react";
import "./Question.css";

export default function Question(props){
    const {question, allAnswers, id, name, selected, handleChange, gameFinished} = props;

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

    return(
        <fieldset key={id} className="question--container">
            <legend>{question}</legend>
                
                <input
                    type="radio"
                    value={allAnswers[0]}
                    name={name}
                    id={id+"-1"}
                    checked={selected === allAnswers[0]}
                    onChange={handleChange}
                    disabled={gameFinished}           
                />
                <label 
                    className={getClassName(0)} 
                    htmlFor={id+"-1"}
                >
                    {allAnswers[0]}
                </label>

                <input 
                    type="radio"
                    value={allAnswers[1]}
                    name={name}
                    id={id+"-2"}
                    checked={selected === allAnswers[1]}
                    onChange={handleChange}
                    disabled={gameFinished}
                />
                <label 
                    className={getClassName(1)} 
                        htmlFor={id+"-2"}
                    >
                    {allAnswers[1]}
                </label>


                    <input 
                    type="radio"
                    value={allAnswers[2]}
                    name={name}
                    id={id+"-3"}
                    checked={selected === allAnswers[2]}
                    onChange={handleChange}
                    disabled={gameFinished}
                />
                <label 
                    className={getClassName(2)}  
                        htmlFor={id+"-3"}
                    >
                    {allAnswers[2]}
                </label>

                <input 
                    type="radio"
                    value={allAnswers[3]}
                    name={name}
                    id={id+"-4"}
                    checked={selected === allAnswers[3]}
                    onChange={handleChange}
                    disabled={gameFinished}
                />
                <label 
                    className={getClassName(3)} 
                    htmlFor={id+"-4"}
                >
                    {allAnswers[3]}
                </label>

            <hr></hr>

        </fieldset>
    )
}