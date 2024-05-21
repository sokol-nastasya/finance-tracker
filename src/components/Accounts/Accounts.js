import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import icon from './AccountIcon.png';
import wallet from './wallet.png';

import cards_data from '../../cards_data';

import './Accounts.css';

function Accounts() {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/card/${id}`);
    }

    return (
        <>
            <div className='accounts-container'>
                <div className='accounts-icon'>
                    <img className='acc-img' src={icon} alt='account' />
                    <Link to='/new-acount' className='add-button'>Add</Link>
                </div>
                <div className='accounts-cards'>
                    {cards_data.map((item) => (
                        <div className='cards' key={item.id} onClick={() => handleClick(item.id)}>
                            <div className='title'>
                                <img className='wallet-img' src={wallet} alt='wallet'/>
                                <h2>{item.name}</h2>
                            </div>
                            <p>${item.score}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Accounts;