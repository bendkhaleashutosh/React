import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = ()=>{
    const navigate = useNavigate();
    const [product,setProduct] = useState(
        {name:"",
        price:"",
        company:""
    });

    const inputChangeHandler = (event)=>{
        setProduct({...product,[event.target.name]:event.target.value});
    }
    //we make post request
    const addProduct = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:8888/product",product).then(()=>{
            window.alert("Product Added Successfully.");
            navigate("/dashboard")
        })
    }
    const {name,price,company} = product
    return (
        <div>
            <h2>Add Component</h2>
            <form onSubmit={addProduct} style={{width:"400px", margin:"auto"}}>
                <div className='form-group'>
                <label className='form-label'>Enter Prouct Name:</label>
                <input type='text' name='name' className='form-control' onChange={inputChangeHandler} value={name}/>
                <div/>
                <div className='form-group'>
                <label className='form-label'>Enter Prouct Price:</label>
                <input type='text' name='price' className='form-control' onChange={inputChangeHandler} value={price}/>
                </div>
                <div className='form-group'></div>
                <label className='form-label'>Enter Prouct Company:</label>
                <input type='text' name='company' className='form-control' onChange={inputChangeHandler} value={company}/>
                </div>
                <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form>
           
            
        </div>
    )
}

export default Add;
