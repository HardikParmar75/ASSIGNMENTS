import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deletedata } from './Userreducer'


function Home() {
  const [users] = useSelector((state) => state.users)
  const dispatch = useDispatch()
  // console.log(users)
  const navigateview = useNavigate()
  const handleview = (id)=>{
    navigateview(`/edit/`+id)
    
  }
  const handleshow = (id)=>{
    navigateview(`/view/`+id)
    
  }
  const handledelete = (id123)=>{
    dispatch(deletedata({id:id123}))
    window.location.reload();
    
  }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-10 m-auto'>
            <Link to='/adduser' className='btn btn-primary shadow my-2'>Add user</Link>
            <table className="table">
              <thead className='table-dark'>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">PHONE</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {users && users.map((user)=>(
                 <tr key={user.id}>
                 <th scope="row">{user.id}</th>
                 <td>{user.name}</td>
                 <td>{user.phone}</td>
                 <td>{user.email}</td>
                 <td>
                  <button className='btn btn-info' onClick={()=>{handleshow(`${user.id}`)}}>View</button>
                  <button className='btn btn-success mx-2' onClick={()=>{handleview(`${user.id}`)}}>Edit</button>
                  <button className='btn btn-danger' onClick={()=>{handledelete(`${user.id}`)}}>Delete</button>
                 </td>
               </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
