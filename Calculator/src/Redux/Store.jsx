import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    user: '', // Store user info
    history: [], // Store calculator button history
    display: '', // Store current calculator display
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'HISTORY':
            return { ...state, history: action.payload };
        case 'DISPLAY':
            return { ...state, display: action.payload };
        case 'LOGOUT':
            return { ...state, display: "", history: [], user: ""};
        default:
            return state;
    }
};

const store = configureStore({ reducer });

export default store;