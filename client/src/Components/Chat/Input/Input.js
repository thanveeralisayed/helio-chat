import React from 'react'

const Input = ({sendMessage,message,setMessage}) => {
    return (
        <div>
            <form onSubmit={sendMessage}>
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
    )
}

export default Input
