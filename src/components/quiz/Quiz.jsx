import React, { useRef, useState, useContext } from 'react';
import { data } from '../../assets/quizData';
import { AppContext } from '../Context';
import './Quiz.css';
import { Button, Card, Typography } from '@mui/material';

function Quiz() {
    const { setQuizState, score, setScore } = useContext(AppContext);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [closed, setClosed] = useState(false);

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    const myOptions = [option1, option2, option3, option4];

    const question = data[questionIndex];

    // Checks the answer
    const checkMyAnswer = (element, answer) => {
        if (!closed) {
            if (question.answer === answer) {
                element.target.classList.add('correct');
                setScore(score + 1);
                // Remove the 'wrong' class after 2 seconds
                setTimeout(() => {
                    element.target.classList.remove('correct');
                }, 3000);
            } else {
                element.target.classList.add('wrong');
                myOptions[question.answer - 1].current.classList.add('correct');
                 // Remove the 'wrong' class after 2 seconds
                 setTimeout(() => {
                    element.target.classList.remove('wrong');
                }, 2000);
            }
            setClosed(true);
        }
    };

    // Resets the color classes
    const resetColors = () => {
        myOptions.forEach(option => {
            if (option.current) {
                option.current.classList.remove('wrong');
                option.current.classList.remove('correct');
            }
        });
    };

    // Navigates to the next question
    const next = () => {
        if (closed) {
            resetColors();
            if (questionIndex < data.length - 1) {
                setQuestionIndex(prevIndex => prevIndex + 1);
                setClosed(false);
            }
        }
    };

    // Ends the quiz
    const done = () => {
        if (closed) {
            resetColors();
            setQuizState('endGame');
        }
    };

    return (
        <div style={{ padding: 10 }}>
            <Card>
                <Typography variant="h2" component="div">
                    Quiz
                </Typography>
                <div style={{ padding: 25 }}>
                    <Typography variant="h5" component="div">
                        {questionIndex + 1}. {question.question}
                    </Typography>
                </div>
                <div className="itemsContainer">
                    <ul>
                        <li ref={option1} onClick={(element) => checkMyAnswer(element, 1)}>
                            <Typography variant="body2">{question.option1}</Typography>
                        </li>
                        <li ref={option2} onClick={(element) => checkMyAnswer(element, 2)}>
                            <Typography variant="body2">{question.option2}</Typography>
                        </li>
                        <li ref={option3} onClick={(element) => checkMyAnswer(element, 3)}>
                            <Typography variant="body2">{question.option3}</Typography>
                        </li>
                        <li ref={option4} onClick={(element) => checkMyAnswer(element, 4)}>
                            <Typography variant="body2">{question.option4}</Typography>
                        </li>
                    </ul>
                    {questionIndex === data.length - 1 ? (
                        <Button onClick={done} variant="contained" style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 5 }}>
                            Last question
                        </Button>
                    ) : (
                        <Button onClick={next} sx={{ pl: 10, pr: 10 }} style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 5 }} variant="contained">
                            Next question
                        </Button>
                    )}
                </div>
            </Card>
        </div>
    );
}

export default Quiz;
