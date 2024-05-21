import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialState = {
    cards: []
};

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        
        return JSON.parse(serializedState);

    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        
    }
};

const persistedState = loadState();

const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;