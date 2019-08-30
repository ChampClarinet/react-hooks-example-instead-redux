import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/filter';
import TodoList from './components/todos';
import AddTodo from './components/addtodo';
import Context from './hooks/context';
import { todos as defaultTodos } from './initializers';

const App = () => {
    //*Filter Reducers (reducers/filter)
    const filterReducer = (state, action) => {
        switch (action.type) {
            case 'SHOW_ALL':
                return 'ALL';
            case 'SHOW_COMPLETE':
                return 'COMPLETE';
            case 'SHOW_INCOMPLETE':
                return 'INCOMPLETE';
            default:
                return state;
        }
    };
    //*Todos Reducers (reducers/todos)
    const todoReducer = (state, action) => {
        switch (action.type) {
            case 'DO_TODO':
                return state.map(todo => {
                    if (todo.id === action.id) {
                        return { ...todo, complete: true };
                    } else {
                        return todo;
                    }
                });
            case 'UNDO_TODO':
                return state.map(todo => {
                    if (todo.id === action.id) {
                        return { ...todo, complete: false };
                    } else {
                        return todo;
                    }
                });
            case 'ADD_TODO':
                return state.concat({
                    task: action.task,
                    id: action.id,
                    complete: false,
                });
            default:
                return state;
        }
    };
    //!Combine Reducers (reducers/index)
    const useCombinedReducers = combinedReducers => {
        //?Global State
        const state = Object.keys(combinedReducers).reduce(
            (acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }),
            {}
        );
        //*Global Dispatch
        const dispatch = action =>
            Object.keys(combinedReducers)
                .map(key => combinedReducers[key][1])
                .forEach(fn => fn(action));
        return [state, dispatch];
    }
    const [state, dispatch] = useCombinedReducers({
        filter: useReducer(filterReducer, 'ALL'),
        todos: useReducer(todoReducer, defaultTodos)
    });
    const { filter, todos } = state;
    const filteredTodos = todos.filter(
        todo => (
            filter === 'ALL'
                ? true
                : filter === 'COMPLETE' && todo.complete
                    ? true
                    : filter === 'INCOMPLETE' && !todo.complete
                        ? true
                        : false
        )
    );
    return (
        <Context.Provider value={dispatch}>
            <Filter />
            <TodoList todos={filteredTodos} />
            <AddTodo />
        </Context.Provider>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);