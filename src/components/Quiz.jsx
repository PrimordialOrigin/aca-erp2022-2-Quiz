//DONT FORGET TO RESEARCH MORE ABOUT LOCALSTORAGE...COULD POSSIBLY USE IT TO SAVE THE QUIZ SCORE -0750HRS

import React, {useRef, useState, useContext} from 'react';
import {data} from '../assets/quizData';
import { AppContext } from './Context';
import './Quiz.css';

function Quiz() {

    let {setQuizState, score, setScore} = useContext(AppContext);
    let [questionIndex, setQuestionIndex] = useState(0);
    let [question, setQuestion] = useState(data[questionIndex]);
    let [closed, setClosed] = useState(false);
    

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let myOptions = [option1, option2, option3, option4];

    //checks the answer 
    const checkMyAnswer = (element, answer) => {
        if(closed === false){
            if(question.answer===answer) {
                element.target.classList.add("correct");
                setClosed(true);
                setScore(score + 1);
            }
            else{
                element.target.classList.add("wrong");
                setClosed(true);
                myOptions[question.answer-1].current.classList.add("correct");
            }
        }

    }
    //navigates to the next question
    const next = () => {
        if(closed === true){
            setQuestionIndex(++questionIndex);
            setQuestion(data[questionIndex]);
            setClosed(false);
            //Reset the color scheme
            myOptions.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const done = () => {
        if(closed === true){
            setQuestionIndex(++questionIndex);
            setQuestion(data[questionIndex]);
            setQuizState("endGame");
        }
        
    }

    return(
        <div className='container'>
            <h1>Quiz</h1>
            <div className="itemsContainer">
                <h3>{questionIndex+1}. {question.question}</h3>
                <ul>
                    <li ref={option1} onClick={(element)=>{checkMyAnswer(element,1)}}>{question.option1}</li>
                    <li ref={option2} onClick={(element)=>{checkMyAnswer(element,2)}}>{question.option2}</li>
                    <li ref={option3} onClick={(element)=>{checkMyAnswer(element,3)}}>{question.option3}</li>
                    <li ref={option4} onClick={(element)=>{checkMyAnswer(element,4)}}>{question.option4}</li>
                </ul>
                {questionIndex === data.length - 1 ? (
                    <button onClick={done}>Last question</button>
                ):(
                    <button onClick={next}>Next question</button>
                )}
            </div>  
        </div>
    )
}

export default Quiz;