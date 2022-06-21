import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./reducer/counterReducer"
import todoReducer from './reducer/todoReducer';



const reducers = combineReducers(
    {
        counterReducer: counterReducer,
        todoReducer: todoReducer,
        
    }
);


export const myStore = configureStore({reducer: reducers})