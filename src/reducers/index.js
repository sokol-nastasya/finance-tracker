import { combineReducers } from "redux";
import expensesReducer from "./expensesReducer";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
    expenses: expensesReducer,
    cardData: cardReducer
});

export default rootReducer;