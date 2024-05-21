import React from "react";
import goals from './goals.png';

import './Goals.css';

import goals_data from '../../goals_data';
import { Link, useNavigate } from "react-router-dom";

function Goals() {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/goal/${id}`);
    };

    return (
        <>
            <div className="goals-container">
                <div className='goals-icon'>
                    <img className='goals-img' src={goals} alt='goals' />
                    <Link to='/new-goals' className='add-button'>Add</Link>
                </div>
                <div className='goals-cards'>
                    {goals_data.map((item) => (
                        <div className='card' key={item.id} onClick={() => handleClick(item.id)}>
                            <div className='title'>
                                <img className='goals-img-mini' src={goals} alt='goals'/>
                                <h2>{item.name}</h2>
                            </div>
                            <div className="procent">
                                <p>{item.procent} %</p>
                                <progress id="procent" max="100" value={item.procent}>{item.procent}</progress>
                            </div>
                            <p>${item.score}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
};

export default Goals;