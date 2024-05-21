import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


import bank from './bank.png';
import chip from './chip.png';

import './AddAccount.css';
import { addCard } from "../../actions";

function AddAccount() {

    const [cardNumber, setCardNumber] = useState('');
    const [cardBankName, setCardBankName] = useState('');
    const [cardScore, setCardScore] = useState('');
    const [cardOwnerName, setCardOwnerName] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [cardDayTo, setCardDayTo] = useState('');
    const [cardName, setCardName] = useState('');

    const dispatch = useDispatch();

    const handleAddCard = () => {
        const newCard = { 
            number: cardNumber,
            bankName: cardBankName,
            score: cardScore,
            ownerName: cardOwnerName,
            cvv: cardCvv,
            dayTo: cardDayTo,
            name: cardName
        };
        dispatch(addCard(newCard));
        setCardNumber('');
        setCardBankName('');
        setCardScore('');
        setCardOwnerName('');
        setCardCvv('');
        setCardDayTo('');
        setCardName('');
    }

    return (
        <>
            <div className="account-container">
                <div className="title-page">
                    <Link to="/"><img src={bank} alt="bank" /></Link>
                    <h2>Add new Bank Account</h2>
                </div>
                <div className="account-form">
                    <form>
                        <div className="card-top">
                            <div className="bank">
                                <label htmlFor="bank-name">Bank Name:</label><br/>
                                <input 
                                    className="bank-input" 
                                    type="text" 
                                    name="bank-name" 
                                    id="bank-name"
                                    value={cardBankName}
                                    onChange={(e) => setCardBankName(e.target.value)}
                                />
                            </div>
                            <div className="bank">
                                <label htmlFor="score">Account Score:</label><br/>
                                <input 
                                    className="bank-input" 
                                    type="number" 
                                    name="score" 
                                    id="score"
                                    value={cardScore}
                                    onChange={(e) => setCardScore(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="card-middle">
                            <img src={chip} alt="chip" />
                            <div className="bank">
                                <label htmlFor="card-number">Card number:</label> <br/>
                                <input 
                                    className="bank-input" 
                                    type="number" 
                                    name="card-number" 
                                    id="card-number" 
                                    maxLength={12} 
                                    required
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <div className="card-bottom">
                            <div className="bank">
                                <label htmlFor="full-name">Full Name:</label><br/>
                                <input 
                                    className="bank-input" 
                                    type="text" 
                                    name="full-name" 
                                    id="full-name" 
                                    value={cardOwnerName}
                                    onChange={(e) => setCardOwnerName(e.target.value)}
                                />   
                            </div>
                            <div className="bank">
                                <label htmlFor="card-cvv">Card CVV:</label><br/>
                                <input 
                                    className="bank-input" 
                                    type="number" 
                                    name="card-cvv" 
                                    id="card-cvv" 
                                    required 
                                    value={cardCvv}
                                    onChange={(e) => setCardCvv(e.target.value)}
                                />   
                            </div>
                            <div className="bank">
                                <label htmlFor="day-to">Day to:</label><br/>
                                <input 
                                    className="bank-input" 
                                    type="date" 
                                    name="day-to" 
                                    id="day-to" 
                                    required 
                                    value={cardDayTo}
                                    onChange={(e) => setCardDayTo(e.target.value)}
                                />
                            </div>
                        </div>
                        <label htmlFor="card-name">Card Name:</label><br/>
                        <input 
                            className="bank-input" 
                            type="text" 
                            name="card-name" 
                            id="card-name" 
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                        />
                        <br/>
                    </form>
                </div>
                <Link className="add-new-card" to="#" onClick={handleAddCard}>Add Card</Link>
            </div>
        </>
    )
};

export default AddAccount;