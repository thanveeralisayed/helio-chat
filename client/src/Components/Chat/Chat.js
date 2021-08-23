import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../UserContext';
import { Link, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import './Chat.css'
import Room from './Room/Room';
let socket;


const Chat = () => {
    const ENDPT = 'localhost:5000';
    const { user, setUser } = useContext(UserContext);
    let { room_id, room_name } = useParams();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket = io(ENDPT);
        const tuser = { name: user.name, room_id: room_id, user_id: user.id };
        console.log(tuser);
        socket.emit('join', { name: user.name, room_id: room_id, user_id: user.id });
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

                    <form onSubmit = {sendMessage}>
                        <nav className="navbar bg-white navbar-expand-sm d-flex justify-content-between">
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                name="" id="" onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
                                type="text number" className="form-control" placeholder="Type a message..." />
                                <div className="d-flex justify-content-end align-content-center text-center ml-2">
                                    <button className="btn btn-success">Send</button>
                                     </div>
                        </nav>
                    </form>




                </div>
            </div>
        </div>
    )
}

export default Chat
