import {
    SHOW_ALL,
    SHOW_COMPLETE,
    SHOW_INCOMPLETE
} from '../../constants/actiontypes';

export default (state, action) => {
    switch (action.type) {
        case SHOW_ALL:
            return 'ALL';
        case SHOW_COMPLETE:
            return 'COMPLETE';
        case SHOW_INCOMPLETE:
            return 'INCOMPLETE';
        default:
            return state;
    }
};