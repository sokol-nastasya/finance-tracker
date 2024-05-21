import React from "react";
import bank from './bank.png'

import { Link, useParams } from "react-router-dom";
import CircularProgress from "../CircleProgress/CircularProgress";
import goals_data from "../../goals_data";

import goal from './goals.png';

import './GoalPage.css';

function GaolPage() {

    const { id }  = useParams();
    const goals = goals_data.find((goal) => goal.id === parseInt(id));

    const count = (goal, procent) => {
        const achive = goal - (goal * procent / 100); 
        return achive;  
    }

    return (
        <>
         <div className="goal-page">
                <div className="title-page">
                <Link to="/"><img src={bank} alt="bank-link" /></Link>
                    <h2>Your goals</h2>
                </div>
                <div className="goals-details">
                    <div className="goals-title">
                        <h3>{goals.name}</h3>
                    </div>
                    <div className="goals-main">
                        <CircularProgress percentage={goals.procent}/>
                        <div className="goals-info">
                            <div className="score">
                                <img src={goal} alt="goal" />
                                <p>$ {goals.score}</p>
                            </div>
                            <p>Your notes:</p>
                            <p className="goal-note">{goals.notes}</p>
                            <div className="math">
                                <p>It remains to achieve the goal:</p>
                                <p className="goals-achive">${count(goals.score, goals.procent)}</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            
        </>
    )
};

export default GaolPage;