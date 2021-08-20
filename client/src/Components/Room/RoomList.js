import React from 'react'
import ListItem from './ListItem';


const RoomList = ({rooms}) => {
    return (
        <div>
            <ul className="list-group">
                {rooms.map((item)=>{
                    return(
                      <ListItem room={item}/> 
                    )
                })}
            </ul>

        </div>
    )
}

export default RoomList
