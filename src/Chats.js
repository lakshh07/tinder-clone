import React from 'react';
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
    return (
        <div className="Chats">
            <Chat 
                name="Amber"
                message="Hey! Whats Up.."
                timestamp="40 seconds ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Amber_Heard_%2843723454772%29.jpg/220px-Amber_Heard_%2843723454772%29.jpg"
            />
            <Chat 
                name="Elon Mask"
                message="Hello Brother.."
                timestamp="10 seconds ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
            />
            <Chat 
                name="Jeff Bezos"
                message="Hey You are superb"
                timestamp="1 minute ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"
            />
            <Chat 
                name="Mark Zukerberg"
                message="Hey! Whats Up.."
                timestamp="4 minute ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
            />
        </div>
    )
}

export default Chats
