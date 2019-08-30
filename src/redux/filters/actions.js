import { useGlobalContext } from '../store';
import {
    SHOW_ALL,
    SHOW_COMPLETE,
    SHOW_INCOMPLETE
} from '../../constants/actiontypes';

export default () => {
    const dispatch = useGlobalContext();
    const showAll = () => dispatch({
        type: SHOW_ALL
    });
    const showComplete = () => dispatch({
        type: SHOW_COMPLETE
    });
    const showIncomplete = () => dispatch({
        type: SHOW_INCOMPLETE
    });
    return {
        showAll,
        showComplete,
        showIncomplete
    };
}