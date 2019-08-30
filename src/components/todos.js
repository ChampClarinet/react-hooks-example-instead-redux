import React from 'react';
import { useGlobalContext } from '../store';

const TodoItem = ({ todo }) => {
    const dispatch = useGlobalContext();
    const handleChange = () =>
        dispatch({
            type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
            id: todo.id
        });
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={handleChange}
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