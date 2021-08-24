import React,{useContext} from 'react';
import { UserContext } from '../../../UserContext';

const Message = ({message}) => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div>
            {
                 user._id === message.user_id ?
                 <div className="d-flex align-items-center text-right justify-content-end ">
                     <div className="pr-2"> <span className="name">{message.name}</span>
                         <p key={message._id} className="msg">{message.text}</p>
                     </div>
                     {/* <div><img src="https://i.imgur.com/HpF4BFG.jpg" width={30} className="img1" /></div> */}
                 </div> : <div className="d-flex align-items-center">
                     {/* <div className="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width={30} className="img1" /></div> */}
                     <div className="pr-2 pl-1"> <span className="name">{message.name}</span>
                         <p key={message.user_id} className="msg">{message.text}</p>
                     </div>
                 </div> 
            }
        </div>
    )
}

export default Message
