import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Edit = ()=> {
    const {id} = useParams();
    const navigate = useNavigate();
    // console.log(id)

    const [product,setProduct] = useState({
        name:"",
        price:"",
        company:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8888/product/${id}`).then((res)=>{
            // console.log(res.data);
            setProduct(res.data);
        })
    },[])

    const inputChangeHandler = (event)=>{
        setProduct({...product,[event.target.name]:event.target.value});
    }

    const editProduct = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8888/product/${id}`,product).then(()=>{
            window.alert("Product Updateded Successfully.");
            navigate("/dashboard")
        })
    }

    const {name,price,company} = product
    return (
        <div>
            <h2>Edit Component</h2>
            <form onSubmit={editProduct} style={{width:"400px", margin:"auto"}}>
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

export default Edit
