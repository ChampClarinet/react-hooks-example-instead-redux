import { useReducer } from 'react';

export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            return 'ALL';
        case 'SHOW_COMPLETE':
            return 'COMPLETE';
        case 'SHOW_INCOMPLETE':
            return 'INCOMPLETE';
        default:
            throw new Error();
    }
};
const [filter, dispatch] = useReducer(filterReducer, 'ALL');

export const stateFilter  = filter;
export const dispatchFilter = dispatch;