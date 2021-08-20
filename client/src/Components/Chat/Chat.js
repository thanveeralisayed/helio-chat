import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Link, useParams } from 'react-router-dom';


const Chat = () => {
    const { user, setUser } = useContext(UserContext);
    let {room_id,room_name} = useParams();

    return (
        <div>
            <h1>{room_name}</h1>
            <Link to={'/'}>
            <button >go to home</button>
            </Link>
        </div>
    )
}

export default Chat
