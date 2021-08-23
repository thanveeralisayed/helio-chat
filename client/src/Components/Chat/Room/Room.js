import React, { useContext,useRef,useEffect } from 'react'
import { UserContext } from '../../../UserContext';
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
                            
                                user.name === message.name ?
                                    <div className="d-flex align-items-center text-right justify-content-end ">
                                        <div className="pr-2"> <span className="name">{message.name}</span>
                                            <p className="msg">{message.text}</p>
                                        </div>
                                        <div><img src="https://i.imgur.com/HpF4BFG.jpg" width={30} className="img1" /></div>
                                    </div> : <div className="d-flex align-items-center">
                                        <div className="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width={30} className="img1" /></div>
                                        <div className="pr-2 pl-1"> <span className="name">{message.name}</span>
                                            <p className="msg">{message.text}</p>
                                        </div>
                                    </div> 
                            
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
