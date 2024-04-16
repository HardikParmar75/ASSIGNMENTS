import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shopall from './Shopall.js';
import Home from './Home.js';
import Makeup from './Makeup.js';
import Skincare from './Skincare.js';
import Haircare from './Haircare.js';
import About from './About.js';
import Contactus from './Contactus.js';
import Shopall2 from './Shopall2.js';
import Shopall3 from './Shopall3.js';
import Skincare2 from './Skincare2.js';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shopall' element={<Shopall/>}></Route>
        <Route path='/makeup' element={<Makeup/>}></Route>
        <Route path='/skincare' element={<Skincare/>}></Route>
        <Route path='/haircare' element={<Haircare/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='/shopall' element={<Shopall/>}></Route>
        <Route path='/shopall2' element={<Shopall2/>}></Route>
        <Route path='/shopall3' element={<Shopall3/>}></Route>
        <Route path='/skincare' element={<Skincare/>}></Route>
        <Route path='/skincare2' element={<Skincare2/>}></Route>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
