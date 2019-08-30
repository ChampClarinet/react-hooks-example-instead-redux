import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/filter';
import TodoList from './components/todos';
import AddTodo from './components/addtodo';
import Store from './redux/store';
import useGlobalReducers from './redux/reducers';

const App = () => {
    const [state, dispatch] = useGlobalReducers();
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
        <Store.Provider value={dispatch}>
            <Filter />
            <TodoList todos={filteredTodos} />
            <AddTodo />
        </Store.Provider>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);