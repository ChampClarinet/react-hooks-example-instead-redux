import { useReducer } from 'react';
import { useCombinedReducers } from '../hooks';

//* reducers
import filterReducer from './filters/reducer';
import todosReducer from './todos/reducer';

//? initial state
import { todos as defaultTodos } from '../constants/initializers';

export default () => (
    useCombinedReducers({
        filter: useReducer(filterReducer, 'ALL'),
        todos: useReducer(todosReducer, defaultTodos)
    })
);