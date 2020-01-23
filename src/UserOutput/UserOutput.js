import React from 'react';
import './UserOutput.css';



const userOutput = (props) => {
return (
        <div className = "UserOutput">
            <p>{props.content}</p>
            <p>You can use the username and password to sign in to Gmail and other Google products like YouTube, Google Play, and Google Drive.</p>
        </div>
    );
};

export default userOutput;