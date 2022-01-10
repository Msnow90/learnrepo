import { useReducer, createContext, useMemo } from 'react';

import usersReducer from '../reducers/usersReducer';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(usersReducer, []);

    const memoizedStateAndDispatch = useMemo(() => {
        return [state, dispatch]
    }, [state, dispatch]);

    return (
        <UsersContext.Provider value={[state, dispatch]}>
            { children }
        </UsersContext.Provider>
    )

}