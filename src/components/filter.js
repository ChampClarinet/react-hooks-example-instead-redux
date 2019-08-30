import React from 'react';
import useFilterStates from '../redux/filters/actions';

export default () => {
    const { showAll, showComplete, showIncomplete } = useFilterStates();
    return (
        <div>
            <button
                type="button"
                onClick={showAll}
            >
                {"Show All"}
            </button>
            <button
                type="button"
                onClick={showComplete}
            >
                {"Show Complete"}
            </button>
            <button
                type="button"
                onClick={showIncomplete}
            >
                {"Show Incomplete"}
            </button>
        </div>
    );
}