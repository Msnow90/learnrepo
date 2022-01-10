import { useReducer, createContext, useMemo } from 'react';

import postsReducer from '../reducers/postsReducer';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(postsReducer, []);

    const memoizedStateAndDispatch = useMemo(() => {
        return [state, dispatch]
    }, [state, dispatch]);

    return (
        <PostsContext.Provider value={[state, dispatch]}>
            { children }
        </PostsContext.Provider>
    )

}