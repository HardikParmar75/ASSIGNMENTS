import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userdata } from './Userreducer.js';
import Adduser from './Adduser.js';
import View from './View.js';
import Edit from './Edit.js';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    fetch('http://localhost:5100/users')
    .then((res)=>{return res.json()})
    .then((data)=>{dispatch(userdata(data))})
  })
  return (
    <div className="App">
    <BrowserRouter>
    <Link to='/home' className='btn shadow my-2'>home</Link>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/adduser' element={<Adduser/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/view/:id' element={<View/>}></Route>
    </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
