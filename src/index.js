import React, { useReducer, createContext } from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/filter';
import TodoList from './components/todos';
import AddTodo from './components/addtodo';
import Context from './hooks/context';
import { todos as defaultTodos } from './initializers';

const App = () => {
    //*Filter
    const filterReducer = (state, action) => {
        switch (action.type) {
            case 'SHOW_ALL':
                return 'ALL';
            case 'SHOW_COMPLETE':
                return 'COMPLETE';
            case 'SHOW_INCOMPLETE':
                return 'INCOMPLETE';
            default:
                throw new Error(`invalid type: ${action.type}`);
        }
    };
    const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
    //*Todos
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
                throw new Error(`invalid type: ${action.type}`);
        }
    };
    const [todos, dispatchTodos] = useReducer(todoReducer, defaultTodos);
    //*Global Dispatch
    // const dispatch = action =>
    //     [dispatchFilter, dispatchTodos].forEach(fn => fn(action));
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
        <Context.Provider value={dispatchTodos}>
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