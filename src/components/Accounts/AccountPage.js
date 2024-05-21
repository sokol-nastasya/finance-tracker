import React from "react";
import { Link } from "react-router-dom";

import bank from './bank.png';

import './AccountPage.css';
import AccountDetails from "./AccountDetails";
import Expense from "../Expense/Expense";


function AccountPage() {
    return (
        <>  
            <div className="account-page">
                <div className="title-page">
                <Link to="/"><img src={bank} alt="bank" /></Link>
                    <h2>Bank Account Page details</h2>
                </div>
                <div className="bank-details">
                    <AccountDetails />
                </div>
                <div className="App-expense">
                    <Expense />
                </div>
            </div>
            
        </>
    )
};

export default AccountPage;