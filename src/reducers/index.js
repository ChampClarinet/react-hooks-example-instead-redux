import { useReducer } from 'react';
import { useCombinedReducers } from '../hooks';

//* reducers
import filterReducer from './filter';
import todosReducer from './todos';

//? initial state
import { todos as defaultTodos } from '../initializers';

export default () => (
    useCombinedReducers({
        filter: useReducer(filterReducer, 'ALL'),
        todos: useReducer(todosReducer, defaultTodos)
    })
);