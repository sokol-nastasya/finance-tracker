import React from "react";
import mainIcon from './MainIcon.png';
import Accounts from "./components/Accounts/Accounts";
import Goals from "./components/Goals/Goals";

import './Home.css';

function Home() {
    return (
    <div className="App-home">
        <header className="App-header">
            <img src={mainIcon} alt="finance icon" />
            <h1>Finance Tracker</h1>
            <hr></hr>
        </header>
        <div className="home-container">
            <div className="App-accounts">
                <Accounts />
            </div>
            <div className="App-goals">
                <Goals />
            </div>
        </div>
        
    </div>
    )
};

export default Home;