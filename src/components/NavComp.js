import React from 'react'
import {Link} from 'react-router-dom';

const NavComp = ()=> {
    return (
        <div>
            <h2>Nav component</h2>
            <Link to="multimedia" className='btn btn-primary btn-sm'>Multimedia</Link>{' '}
            <Link to="userfrm" className='btn btn-primary btn-sm'>User Form</Link>{' '}
            <Link to="toggleimg" className='btn btn-primary btn-sm'>Toggle Image</Link>{' '}
            <Link to="myclasscomp" className='btn btn-primary btn-sm'>My Class Component</Link>{' '}
            <Link to="smiletogg" className='btn btn-primary btn-sm'>Smile Toggle</Link>{' '}
            <Link to="mycolor" className='btn btn-primary btn-sm'>My Color</Link>{' '}
            <Link to="myfavcolor" className='btn btn-primary btn-sm'>My Fav Color</Link>{' '}
            <Link to="usestate" className='btn btn-primary btn-sm'>Use State Comp</Link>{' '}
            <Link to="dashboard" className='btn btn-success btn-sm'>CRUD</Link>{' '}

        </div>
    )
}

export default NavComp
