import React from 'react';
import useTodosStates from '../redux/todos/actions';

const TodoItem = ({ todo }) => {
    const { toggleComplete } = useTodosStates();
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => toggleComplete(todo)}
                />
                {todo.task}
            </label>
        </li>
    );
};

export default ({ todos }) => {
    return (
        <ul>
            {todos.map(
                todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                )
            )}
        </ul>
    )
};