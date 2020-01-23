import React from 'react';


const userInput = (props) => {
    const inputStyle = {
        backgroundColor: 'yellow',
        border: '1px solid red',
        padding: '8px',
      };

return (
    <div className = "UserInput">
        <input style = {inputStyle} type ="text" onChange={props.changed} value = {props.name}/>
    </div>
)
};

export default userInput;