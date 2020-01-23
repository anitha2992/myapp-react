import React from 'react';
import './Person.css';


const person = (props) => {
// return <p>I'm a person and i am {Math.floor(Math.random() *30)} yrs old!</p>
return (
    <div className = "Person">
        <p onClick = {props.click}> I'm {props.name} and i am {props.age} yrs old and my gender is {props.gender}</p>
        <p>{props.children}</p>
        <input type ="text" onChange={props.changed} value={props.name}/>
    </div>
)
};

export default person;