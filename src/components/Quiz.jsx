import React, {useState} from 'react';
import {data} from '../assets/quizData';
import './Quiz.css';

function Quiz() {

    let [questionIndex, setQuestionIndex] = useState(0);
    let [question, setQuestion] = useState(data[questionIndex]);

    return(
        <div className='container'>
            <h1>Javascript Quiz</h1>
            <div className="itemsContainer">
                <h3>{questionIndex+1}. {question.question}</h3>
                <ul>
                    <li>{question.option1}</li>
                    <li>{question.option2}</li>
                    <li>{question.option3}</li>
                    <li>{question.option4}</li>
                </ul>
                <button>Next question</button>
            </div>
        </div>
    )
}

export default Quiz;