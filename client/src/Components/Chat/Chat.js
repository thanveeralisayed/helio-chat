import React, { useContext,useEffect } from 'react';
import { UserContext } from '../../UserContext';
import { Link, useParams } from 'react-router-dom';
import  io  from 'socket.io-client';
let socket;


const Chat = () => {
    const ENDPT = 'localhost:5000';
    const { user, setUser } = useContext(UserContext);
    let {room_id,room_name} = useParams();

    useEffect(() => {
        socket = io(ENDPT);
        const tuser = {name:user.name,room_id:room_id,user_id:user.id};
        console.log(tuser);
        socket.emit('join',{name:user.name,room_id:room_id,user_id:user.id});
    }, [])


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
