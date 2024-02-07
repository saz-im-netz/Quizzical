import React from "react";
import "./Start.css";

export default function Start(props){
    const {startGame, questionParameters, setQuestionParameters} = props;

    function handleChange(event){
        const {name, value} = event.target;
        setQuestionParameters(prevState => prevState.map(parameter => {
            return name === "difficulty" ? 
            {...parameter, difficulty: value} :
                name === "category" ?
                {...parameter, category: value} :
                    parameter
        }))
    }
    
    

    return (
        <div className="Start">

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="158" 
                height="141" 
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

            <h1>Quizzical</h1>
            <p>Learn something new every day.</p>

            <div className="selection--container">
                <div className="selection--box">
                    <label htmlFor="difficulty" className="select--label">Choose difficulty</label>
                    <select
                        name="difficulty"
                        id="difficulty"
                        onChange={handleChange}
                    >
                        <option value="">any</option>
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </select>
                </div>
                
                <div className="selection--box">
                    <label htmlFor="category" className="select--label">Choose category</label>
                    <select
                        name="category"
                        id="category"
                        onChange={handleChange}
                        value={questionParameters.category}
                    >                
                        <option value="">any</option>
                        <option value="9">General Knowledge</option>
                        <option value="17">Science & Nature</option>
                        <option value="27">Animals</option>
                        <option value="18">Computers</option>
                        <option value="19">Mathematics</option>
                        <option value="22">Geography</option>
                        <option value="24">Politics</option>
                        <option value="23">History</option>
                        <option value="20">Mythology</option>  
                        <option value="25">Art</option>
                        <option value="21">Sports</option>
                        <option value="26">Celebrities</option> 
                        <option value="28">Vehicles</option>
                        <option value="30">Gadgets</option>
                        <option value="10">Books</option>
                        <option value="29">Comics</option>
                        <option value="31">Anime & Manga</option>
                        <option value="32">Cartoon & Animation</option>
                        <option value="11">Film</option>
                        <option value="12">Music</option>
                        <option value="13">Musicals & Theatres</option>
                        <option value="14">Television</option>
                        <option value="15">Video Games</option>
                        <option value="16">Board Games</option>

                    </select>
                </div>
                
            </div>

            <button onClick={startGame}>Start Quiz</button>

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="148" 
                height="118" 
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
