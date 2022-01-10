import { useContext, useEffect } from "react";
import axios from 'axios';

import { UsersContext } from '../context/usersContext';

export default () => {
    const [ usersState, usersDispatch ] = useContext(UsersContext);

    const fetchUsers = async () => {
        setTimeout(() => {
            let newUsers = [];

            for (let i = 0; i < 5; ++i) {
                newUsers.push({
                    firstName: 'd8ry7d8ryer',
                    lastName: 'd89f7d8ydfjn',
                    id: i + 1
                })
            }

            usersDispatch({ type: 'fetched', data: newUsers });

        }, 100)
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const onChangeHandler = (e, id) => {
        usersDispatch({ 
            type: 'update', 
            field: e.target.name, 
            value: e.target.value, 
            userId: id
        })
    }

    return (
        <>
        <h1>Users (UsersContext)</h1>
            {
                usersState.map(user => {
                    return (
                        <input 
                            key={user.id} 
                            type="text" 
                            value={user.firstName}
                            name="firstName"
                            onChange={(e) => onChangeHandler(e, user.id)}
                        />
                    )
                })
            }
        </>
    )
}