import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

import Home from './Home';
import Statistics from './components/Statistics/Statistics';
import NotFound from './components/NotFoundPage/NotFound';
import Expense from './components/Expense/Expense';
import AccountPage from './components/Accounts/AccountPage';
import GaolPage from './components/Goals/GoalPage';
import AddAccount from './components/AddAccount/AddAccount';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/statistics" element={<Statistics/>}/>
          <Route path="/expense" element={<Expense/>}/>
          <Route path='/card/:id' element={<AccountPage />} />
          <Route path='/goal/:id' element={<GaolPage />} />
          <Route path='/new-acount' element={<AddAccount />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
