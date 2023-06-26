import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const DashBoard = ()=> {

    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = ()=>{
        axios.get("http://localhost:8888/product").then((res)=>{
            //console.log(res.data);
            setProduct(res.data);
        })
    }

    const deleteRecord = (id)=> {

        if(window.confirm(`Are you sure you wanted to delete record with Id:${id}`)){
            axios.delete(`${"http://localhost:8888/product"}/${id}`).then(()=>{
            window.alert("Record Deleted Successfully.");
            fetchData();
        })
        }
        
    }

    return (
        <div>
            <div className='row'>
                <div className='col-sm-4'>
                    <Link to="/add" className='btn btn-primary mb-2'><i class="fa fa-plus" aria-hidden="true"></i> Add</Link>
                </div>
                <div className='col-sm-8'></div>
            </div>
            <h2>Dash Board Component</h2>
            <table className='table table-hover table-bordered table-striped'>
                <thead>
                    <tr className='table-primary'>
                        <th>Id</th><th>Product Name</th><th>Price</th><th>Company</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((val,index)=>{
                            return <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.company}</td>
                                <td>
                                    <Link to={`/edit/${val.id}`} className='btn btn-outline-success btn-sm'>
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Link> | 
                                    <button type='button' onClick={()=>deleteRecord(val.id)} className='btn btn-outline-danger btn-sm'>
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DashBoard
