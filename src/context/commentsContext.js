import { useReducer, createContext, useMemo } from 'react';

import commentsReducer from '../reducers/commentsReducer';

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(commentsReducer, []);

    const memoizedStateAndDispatch = useMemo(() => {
        return [state, dispatch]
    }, [state, dispatch]);




    return (
        <CommentsContext.Provider value={[state, dispatch]}>
            {children}
        </CommentsContext.Provider>
    )

}