import React from 'react';
import { useGlobalContext } from '../store';

export default () => {
    const dispatch = useGlobalContext();
    const handleShowAll = () =>
        //!(action/filter)
        dispatch({ type: 'SHOW_ALL' });
    const handleShowComplete = () =>
        //!(action/filter)
        dispatch({ type: 'SHOW_COMPLETE' });
    const handleShowIncomplete = () =>
        //!(action/filter)
        dispatch({ type: 'SHOW_INCOMPLETE' });
    return (
        <div>
            <button
                type="button"
                onClick={handleShowAll}
            >
                {"Show All"}
            </button>
            <button
                type="button"
                onClick={handleShowComplete}
            >
                {"Show Complete"}
            </button>
            <button
                type="button"
                onClick={handleShowIncomplete}
            >
                {"Show Incomplete"}
            </button>
        </div>
    );
}