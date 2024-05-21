import { ADD_CARD } from "../actions";


const initialCardState = {
    cards: []
}

const cardReducer = (state = initialCardState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                cards: [...state.cards, action.payload]
            };
        default:
            return state;
    }
}

export default cardReducer;