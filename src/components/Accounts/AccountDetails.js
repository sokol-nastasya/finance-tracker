import React from "react";
import { useParams } from "react-router-dom";

import cards_data from "../../cards_data";
import chip from './chip.png';

import './AccountDetails.css';

function AccountDetails() {

    const { id }  = useParams();
    const card = cards_data.find((card) => card.id === parseInt(id));

    if (!card) {
        return <div>Card not found!</div>;
    }

    return (
        <>
            <div className="details">
                <h3>{card.name}</h3>
                <div className="bank-card">
                    <div className="bank-title">
                        <p>{card.bankName}</p>
                        <p className="score">${card.score}</p>
                    </div>
                    <div className="bank-main">
                        <img src={chip} alt="bank chip"/>
                        <p className="card-num">{card.number}</p>
                    </div>
                    <div className="bank-owner">
                        <div className="owner-info">
                            <span>Card owner</span>
                            <p className="card-owner">{card.userName}</p>
                        </div>
                        <div className="owner-info">
                            <span>Expiry</span>
                            <p>{card.dayTo}</p>
                        </div>
                        <div className="owner-info">
                            <span>CVV</span>
                            <p>{card.cvv}</p>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </>
    )
};

export default AccountDetails;