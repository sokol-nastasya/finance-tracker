const addExpenses = (expense) => ({
    type: 'ADD_EXPENSE',
    payload: expense,
});

export const ADD_CARD = 'ADD_CARD';

export const addCard = (card) => ({
    type: ADD_CARD,
    payload: card
});

export default {
    addExpenses,
    addCard,
} 