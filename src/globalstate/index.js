import { filterDispatch } from './filter';
//import todos from './todos';

//!Global Dispatch Function
export default action =>
    [
        //todos.dispatch,
        filterDispatch
    ].forEach(fn => fn(action));