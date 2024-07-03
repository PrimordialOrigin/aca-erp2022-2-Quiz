import React, {useState} from 'react';
import {data} from '../assets/quizData';
import './Quiz.css';

function Quiz() {

    let [questionIndex, setQuestionIndex] = useState(0);
    let [question, setQuestion] = useState(data[questionIndex]);

    const checkMyAnswer = (element, answer) => {
        if(question.answer===answer) {
            element.target.classList.add("correct");
        }
        else{
            element.target.classList.add("wrong")
        }
    }
    const next = () => {
        setQuestionIndex(++questionIndex);
        setQuestion(data[questionIndex]);
    }

    return(
        <div className='container'>
            <h1>Javascript Quiz</h1>
            <div className="itemsContainer">
                <h3>{questionIndex+1}. {question.question}</h3>
                <ul>
                    <li onClick={(element)=>{checkMyAnswer(element,1)}}>{question.option1}</li>
                    <li onClick={(element)=>{checkMyAnswer(element,2)}}>{question.option2}</li>
                    <li onClick={(element)=>{checkMyAnswer(element,3)}}>{question.option3}</li>
                    <li onClick={(element)=>{checkMyAnswer(element,4)}}>{question.option4}</li>
                </ul>
                <button onClick={next}>Next question</button>
            </div>
        </div>
    )
}

export default Quiz;