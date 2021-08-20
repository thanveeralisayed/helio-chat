import React from 'react'
import ListItem from './ListItem';
import {Link} from 'react-router-dom';

const RoomList = ({ rooms }) => {
    return (
        <div>
            <ul className="list-group">
                {rooms.map((room) => {
                    return (
                        <Link key={room._id} to={'/chat/'+room._id+'/'+room.name}>
                            <ListItem room={room} />
                        </Link>
                    )
                })}
            </ul>

        </div>
    )
}

export default RoomList
