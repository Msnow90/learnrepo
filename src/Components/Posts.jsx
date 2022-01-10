import { useContext, useEffect } from "react";
import axios from 'axios';

import { PostsContext } from '../context/postsContext';

export default () => {
    const [ postsState, postsDispatch ] = useContext(PostsContext);

    const fetchPosts = async () => {
        setTimeout(() => {
            let newPosts = [];

            for (let i = 0; i < 5; ++i) {
                newPosts.push({
                    title: 'ttttttdfdfr',
                    id: i + 1
                })
            }
            console.log('calling...')
            postsDispatch({ type: 'fetched', data: newPosts });

        }, 100)
    }

    useEffect(() => {
        fetchPosts();
    }, [])


    const onChangeHandler = (e, id) => {
        postsDispatch({ 
            type: 'update', 
            field: e.target.name, 
            value: e.target.value, 
            userId: id
        })
    }

    return (
        <>
        <h1>Posts (PostsContext)</h1>
            {
                postsState.map(post => {
                    return (
                        <input 
                        key={post.id} 
                        type="text" 
                        value={post.title}
                        name="title"
                        onChange={(e) => onChangeHandler(e, post.id)}
                    />
                    )
                })
            }
        </>
    )
}