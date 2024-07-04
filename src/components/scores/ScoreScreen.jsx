import React, {useContext, useState} from "react";
import './ScoreScreen.css'
import {data} from '../../assets/quizData';
import { AppContext } from '../Context';

function ScoreScreen(){
    let { score, setScore} = useContext(AppContext);
    return(
        <div className="endGame">
            <h1 className="title">Quiz has Ended</h1>
            <div className="endGameContent">
                <h3>Score</h3>
                <hr />
                <h2>{score}/{data.length}</h2>
            </div>
        </div>
    ) 
}

export default ScoreScreen;