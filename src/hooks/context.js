import { createContext, useContext } from 'react';

const DispatchContext = createContext(null);

//!Hook this function at files those using global state.
export const useGlobalContext = () => useContext(DispatchContext);

//!Same as Provider in redux.
export default DispatchContext;