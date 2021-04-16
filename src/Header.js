import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from  "react-router-dom";

function Header({backButton}) {
    const history = useHistory(); 
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}>
                    <ArrowBackIosIcon font-size="large" className="header_icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon font-size="large" className="header_icon" />
                </IconButton>
            )}

            <img className="header_logo" src="https://logos-world.net/imageup/Tinder/Tinder-Logo-PNG4.png" 
            alt="tinder_logo" />
            
            <Link to="/chats">
                <IconButton>
                    <ForumIcon font-size="large" className="header_icon" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header