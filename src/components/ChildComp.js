import React from 'react';

const ChildComp = ({count,counterIncrement,myName})=>{
    const greeting = ()=>{
        window.alert(`Welcome ${myName}`);
    }
    return(<div>
        <h1>Child Component</h1>
        <p>My counter value is: <strong>{count}</strong></p>
        <button type='button' onClick={counterIncrement}>count ++</button> &nbsp;
        <button type='button' onClick={greeting}>Greet</button>
    </div>
    )
}

export default ChildComp;