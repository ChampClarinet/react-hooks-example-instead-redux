import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { useGlobalContext } from '../store';

export default () => {
    const dispatch = useGlobalContext();
    const [task, setTask] = useState('');
    const handleSubmit = e => {
        task && dispatch({
            type: 'ADD_TODO',
            task,
            id: uuid()
        })
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