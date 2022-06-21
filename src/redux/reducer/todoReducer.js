import {ADD_TODO, DELETE_TODO, CLEAR_TODO_LIST, TOGGLE_TODO} from "../types/todoTypes"

const initialState = {
    counter: 0,
    list: [{id:0, text: "Add todo", complete: false}]
}


const todoReducer = (state=initialState, action) => {


    switch(action.type) {
        case ADD_TODO: 
            return {
                ...state, 
                counter:state.counter + 1,
                list: [
                    ...state.list,
                    { id: state.counter + 1,
                        text: action.payload,
                        complete: false
                    }
                ],
        };
        case DELETE_TODO: 
            return {
                ...state, 
                list: state.list.filter((item) => item.id !== action.payload),
        };
        case TOGGLE_TODO: 
        return {
            ...state, 
            list: state.list.map((todo) => todo.id === action.payload ? {...todo, complete: !todo.complete} : todo),
        };
        case CLEAR_TODO_LIST: 
            return initialState;

        
        default: 
            return state;
    }

}

export default todoReducer