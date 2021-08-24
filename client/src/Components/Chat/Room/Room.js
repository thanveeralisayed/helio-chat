import React, { useContext,useRef,useEffect } from 'react'
import { UserContext } from '../../../UserContext';
import Message from '../Message/Message';
const Room = ({ messages }) => {
    const divref = useRef(null);

    useEffect(() => {
        divref.current.scrollIntoView({ behavior: 'smooth' });
      });
    const { user, setUser } = useContext(UserContext);
    console.log(messages);
    return (
        <div>
            <div className="px-2 scroll">

                {
                    messages.map((message => {
                        return (
                            <Message message={message} />
                        )
                    }))
                }

                <div ref={divref}>

                </div>


            </div>
        </div>
    )
}

export default Room
