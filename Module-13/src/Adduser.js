import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { adduserdata } from './Userreducer';

function Adduser() {
    const dispatch = useDispatch();
    const [name,setname] = useState('');
    const [phone,setphone] = useState('');
    const [email,setemail] = useState('');
    const navigate = useNavigate();
    const handlesubmit = (e)=>{
        e.preventDefault();
        dispatch(adduserdata({name:name,phone:phone,email:email}))
        navigate('/home')
        window.location.reload()
    }
    return (
        <div>
            <div className='container text-start'>
                <div className='row'>
                    <div className='col-6 m-auto'>
                        <form onSubmit={handlesubmit}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text"
                                value={name}
                                onChange={(e)=>{setname(e.target.value)}} className="form-control"  placeholder='Name'/>
                            </div>
                            <div className="mb-3">
                                <label>Phone</label>
                                <input type="text" 
                                value={phone}
                                onChange={(e)=>{setphone(e.target.value)}}
                                className="form-control"  
                                placeholder='Phone'/>
                            </div>
                            <div className="mb-3">
                                <label>Email</label>
                                <input type="email" value={email} 
                                onChange={(e)=>{setemail(e.target.value)}} 
                                className="form-control" 
                                placeholder='Email' />
                            </div>

                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adduser
