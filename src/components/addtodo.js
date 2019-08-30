import React, { useState } from 'react';
import useTodosStates from '../redux/todos/actions';

export default () => {
    const { addTodo } = useTodosStates();
    const [task, setTask] = useState('');
    const handleSubmit = e => {
        task && addTodo(task);
        setTask('');
        e.preventDefault();
    };
    const handleChange = e =>
        setTask(e.target.value);
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={handleChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}