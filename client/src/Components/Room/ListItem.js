import React from 'react'

const ListItem = ({ room }) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    {room.name}
                </div>
            </div>

        </div>
    )
}

export default ListItem
