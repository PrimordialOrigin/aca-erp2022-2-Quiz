//DONT FORGET TO RESEARCH MORE ABOUT LOCALSTORAGE...COULD POSSIBLY USE IT TO SAVE THE QUIZ SCORE -0750HRS

import React, {useRef, useState, useContext} from 'react';
import {data} from '../../assets/quizData';
import { AppContext } from '../Context';
import './Quiz.css';
import { Button, Card, Typography } from '@mui/material';

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
    <div className="" style={{padding: 10}}>
        <Card>
            <Typography variant="h2" component="div">
                Quiz
            </Typography>
            <div style={{padding: 25}}>
                <Typography variant="h5" component="div">
                    {questionIndex+1}. {question.question}
                </Typography>
            </div>
            <h3></h3>
            <div className="itemsContainer">
                <ul>
                    <li ref={option1} onClick={(element)=>{checkMyAnswer(element,1)}}>
                        <Typography variant="body2">
                            {question.option1}
                        </Typography>
                    </li>
                    <li ref={option2} onClick={(element)=>{checkMyAnswer(element,2)}}>
                        <Typography variant="body2">
                            {question.option2}
                        </Typography>
                    </li>
                    <li ref={option3} onClick={(element)=>{checkMyAnswer(element,3)}}>
                        <Typography variant="body2">
                            {question.option3}
                        </Typography>
                    </li>
                    <li ref={option4} onClick={(element)=>{checkMyAnswer(element,4)}}>
                        <Typography variant="body2">
                            {question.option1}
                        </Typography>
                    </li>
                </ul>
                {questionIndex === data.length - 1 ? (
                    <Button onClick={done} variant="contained" style={{paddingLeft: 20, paddingRight:20, paddingTop: 5}}>Last question</Button>
                ):(
                    <Button onClick={next} sx={{pl:10, pr:10}} style={{paddingLeft: 20, paddingRight:20, paddingTop: 5}} variant="contained">Next question</Button>
                )}
            </div>  
        </Card>
    </div>  
    )
}

export default Quiz;