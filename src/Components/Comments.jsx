import { useContext, useEffect } from "react";
import axios from 'axios';

import { CommentsContext } from '../context/commentsContext';

export default () => {
    const [ commentsState, commentsDispatch ] = useContext(CommentsContext);

    const fetchComments = async () => {
        setTimeout(() => {
            let newComments = [];

            for (let i = 0; i < 5; ++i) {
                newComments.push({
                    message: 'dfidufi8dhf4t8rth@',
                    id: i + 1
                })
            }
            console.log('calling...')
            commentsDispatch({ type: 'fetched', data: newComments });

        }, 100)
    }

    useEffect(() => {
        fetchComments();
    }, [])

    
    const onChangeHandler = (e, id) => {
        commentsDispatch({ 
            type: 'update', 
            field: e.target.name, 
            value: e.target.value, 
            userId: id
        })
    }


    return (
        <>
        <h1>Comments (Comments Context)</h1>
            {
                commentsState.map(comment => {
                    return (
                        <input 
                        key={comment.id} 
                        type="text" 
                        value={comment.message}
                        name="message"
                        onChange={(e) => onChangeHandler(e, comment.id)}
                    />
                    )
                })
            }
        </>
    )
}