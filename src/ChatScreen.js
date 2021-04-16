import React from 'react';
import "./ChatScreen.css";
import {useState} from 'react';
import { Avatar } from '@material-ui/core';
import SelectInput from '@material-ui/core/Select/SelectInput';

function ChatScreen() {
    const [input, setinput] = useState();
    const [messages, setmessages] = useState([
        {
            name:"Amber",
            message:"Hey! Whats Up..",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Amber_Heard_%2843723454772%29.jpg/220px-Amber_Heard_%2843723454772%29.jpg"
        },
        {
            name: 'Amber',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Amber_Heard_%2843723454772%29.jpg/220px-Amber_Heard_%2843723454772%29.jpg',
            message: 'How its going'
        },
        {
            message: 'Goood !!'
        }
    ]);

    const handleSend = e=>{
        e.preventDefault();

        setmessages([...messages,{message: input}])
        setinput('');
    }

    return (
        <div className="chatScreen"> 
            <p className="chatScreen_timestamp">YOU MATCHED WITH AMBER WITH 10/08/2020</p>
            {messages.map(message =>(
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar className="chatScreen_avatar" alt={message.name} src={message.image} />
                        <p className="chatScreen_chat">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen_message">
                        <p className="chatScreen_chatUser">{message.message}</p>
                    </div>
                )
            ))}
            <div>
                <form className="chatScreen_input"> 
                    <input value={input} onChange={(e)=> setinput(e.target.value)} className="chatScreen_inputField" placeholder="Type a message.." type="text" />
                    <button onClick={handleSend} className="input_button">SEND</button>
                </form>
            </div>
        </div>

    )
}

export default ChatScreen
