import {
    DO_TODO,
    UNDO_TODO,
    ADD_TODO
} from '../../constants/actiontypes';

export default (state, action) => {
    switch (action.type) {
        case DO_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: true };
                } else {
                    return todo;
                }
            });
        case UNDO_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: false };
                } else {
                    return todo;
                }
            });
        case ADD_TODO:
            return state.concat(action.payload);
        default:
            return state;
    }
};