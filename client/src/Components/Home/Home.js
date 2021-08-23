import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import RoomList from '../Room/RoomList';
import io from 'socket.io-client';
let socket;

const Home = () => {
    const ENDPT = 'localhost:5000';
    const { user, setUser } = useContext(UserContext);
    const [room, setRoom] = useState('');
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        socket = io(ENDPT);
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [rooms])

    useEffect(() => {
       socket.on('room-created',room=>{
           setRooms([...rooms,room]);
       })
    }, [rooms])

    useEffect(() => {
        socket.on('output-rooms',rooms=>{
            setRooms(rooms)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('create-room', room)
        console.log(room)
    }

    const setAsJohn = () => {
        const john = {
            name: 'john',
            emai: 'john@gmail.com',
            password: '123',
            id: '123'
        }
        setUser(john);
    }

    const setAsTom = () => {
        const tom = {
            name: 'tom',
            emai: 'tom@gmail.com',
            password: '456',
            id: '456'
        }
        setUser(tom);
    }




    return (
        <div>

            <div className="row justify-content-around">
                <div className="col-md-6">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Create Room</h5>
                            <div className="card-text">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Give a name for your room</label>
                                        <input type="text" className="form-control" id="roomname"
                                            onChange={(e) => setRoom(e.target.value)}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-6">
                    <RoomList rooms={rooms} />
                </div>

                <div className="row justify-content-center mt-5">
                    <div>

                        <button onClick={setAsJohn}>set as john</button>
                        <button onClick={setAsTom}>set as tom</button>
                        <Link to={'/chat'}>
                            <button >go to chat</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
