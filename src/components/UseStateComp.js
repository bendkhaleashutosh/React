import React, { useState } from 'react'

const UseStateComp = ()=> {
    //usestate contains string type data
    const[city,setCity] = useState("Mumbai");
    //usestate contains object type data
    const[emp,setEmp] = useState({id:501,name:"Ashu",post:"Student"});
    //usestate contains array type data
    const[fruits,setFruits] = useState(["Apple","Mango","Banana","Graps"]);
    const changeCity = ()=>{
        setCity("Pune");
    }
    return (
        <div>
            <h2>Use State Comp</h2>
            <p>I live in <strong>{city}</strong></p>
            <p>{`Id:${emp.id} name:${emp.name} post:${emp.post}`}</p>
            <button type='button' className='btn btn-primary' onClick={changeCity}>Change City</button>

            <ol>
                {fruits.map((val,index)=>{
                    return <li key={index}>{val}</li>
                })}
            </ol>
        </div>
    )
}

export default UseStateComp
