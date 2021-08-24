import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../UserContext';
import { Link, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import './Chat.css'
import Room from './Room/Room';
import Input from './Input/Input';
let socket;


const Chat = () => {
    const ENDPT = 'localhost:5000';
    const { user, setUser } = useContext(UserContext);
    let { room_id, room_name } = useParams();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket = io(ENDPT);
        const tuser = { name: user.name, room_id: room_id, user_id: user._id };
        console.log(tuser);
        socket.emit('join', { name: user.name, room_id: room_id, user_id: user._id });
    }, []);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message])
        });
    }, [messages]);


    const sendMessage = event => {
        event.preventDefault();
        if (message) {
            console.log(message);
            socket.emit('sendMessage', message, room_id, () => setMessage(''));
        }
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="main">
                    <Room messages={messages} />
                    <Input sendMessage={sendMessage} setMessage={setMessage} message={message} />
                </div>
            </div>
        </div>
    )
}

export default Chat
