import { useGlobalContext } from '../store';
import {
    DO_TODO,
    UNDO_TODO,
    ADD_TODO
} from '../../constants/actiontypes';
import uuid from 'uuid/v4';

export default () => {
    const dispatch = useGlobalContext();
    const toggleComplete = (todo) => {
        dispatch({
            type: todo.complete ? UNDO_TODO : DO_TODO,
            payload: todo
        })
    }
    const addTodo = (task) => {
        const newTodo = {
            id: uuid(),
            task: task,
            complete: false
        }
        dispatch({
            type: ADD_TODO,
            payload: newTodo
        })
    }
    return { toggleComplete, addTodo };
}