import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./Chat.css";
import {Link} from "react-router-dom";

function Chat({name,message,timestamp,profilePic}) {
    return (
        <Link to={`/chat/${name}`}>    
            <div className="Chat">
                <Avatar className="chat_image" src={profilePic} />
                <div className="chat_details">
                    <h3>{name}</h3>
                    <p>{message}</p>
                </div>
                <p className="chat_timestamp">{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat
