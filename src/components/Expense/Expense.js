import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import expense from './expense.png';
import './Expense.css';
import cards_data from "../../cards_data";
import { Link, useParams } from "react-router-dom";

import addExpenses from '../../actions/index.js'



function Expense() {
    const { id } = useParams();
    const cardId = parseInt(id);
    const card = cards_data.find(card => card.id === parseInt(id));
    const expenses = useSelector(state => state.expenses.filter(exp => exp.cardId === cardId));
    const dispatch = useDispatch();

    const [newExpenses, setNewExpenses] = useState({title: '', price: ''});

    const handleForm = () => {
        const form = document.querySelector('.form');
        const btn = document.querySelector('.btn-plus');
        form.style.visibility = 'visible';
        btn.style.visibility = 'hidden';
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewExpenses({ ...newExpenses, [name]: value });
    };

    const handleAddExpenses = () => {
        if (newExpenses.title && newExpenses.price) {
            const expenseToAdd = {...newExpenses, price: parseFloat(newExpenses.price), cardId};
            dispatch(addExpenses(expenseToAdd));
            setNewExpenses({title:'', price: ''})
            }
        };

    return (
        <>
            <div className="expense-container">
                <div className="title-container">
                    <img src={expense} alt="expense" className="expense-img" />
                    <h2>Your expenses</h2>
                </div>
                <div className="main-info">
                    { card && card.expenses.map((expense, index) => (
                        <div className="expense" key={index}>
                            <p>{expense.title}</p>
                            <p>- {expense.price} $</p>
                        </div>
                    ))}
                    { card && expenses.map((expense, index) => (
                        <div className="expense" key={index}>
                            <p>{expense.title}</p>
                            <p>- {expense.price} $</p>
                        </div>
                    ))}
                </div>
                <div className="add-expenses">
                    <div className="btn-plus">
                        <button onClick={handleForm} className="btn-plus">+</button>
                    </div>
                    <div className="form">
                        <div className="input-expenses">
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter your expenses title"
                                value={newExpenses.title}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Enter your expenses price"
                                value={newExpenses.price}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="add-btn">
                            <Link to="#" onClick={handleAddExpenses} className="add-expenses-btn">Add new Expenses</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
};

export default Expense;