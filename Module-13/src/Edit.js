import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router';
import { Edituserdata } from './Userreducer';

function Edit() {
    const dispatch = useDispatch();
    const [id, setId] = useState(""); 
    const [name, setName] = useState("");
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    
    const navigate = useNavigate();
    const { id: userId } = useParams(); 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Edituserdata({ id: userId, name, phone, email }))
        navigate('/home');
        window.location.reload()
    }
    useEffect(() => {
        fetch('http://localhost:5100/users/' + userId)
            .then((res) => { return res.json() })
            .then((data) => {
                setId(data.id)
                setName(data.name)
                setPhone(data.phone)
                setEmail(data.email)
            })
    }, [userId]) 
    return (
        <div>
            <div className='container text-start'>
                <div className='row'>
                    <div className='col-6 m-auto'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label>ID</label>
                                <input type="text"
                                    value={id} disabled 
                                    className="form-control" placeholder='ID' />
                            </div>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }} className="form-control" placeholder='Name' />
                            </div>
                            <div className="mb-3">
                                <label>Phone</label>
                                <input type="text"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                    className="form-control"
                                    placeholder='Phone' />
                            </div>
                            <div className="mb-3">
                                <label>Email</label>
                                <input type="email" value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
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

export default Edit
