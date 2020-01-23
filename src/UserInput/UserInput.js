import React from 'react';


const userInput = (props) => {
    const inputStyle = {
        border: '1px solid blue'
    }
return (
    <div className = "UserInput">
        <input  type ="text" style ={{border: '4px solid'}} onChange={props.changed} value = {props.name}/>
    </div>
)
};

export default userInput;