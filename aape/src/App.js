import React, { useEffect, useState } from 'react';
import{Route,Routes} from "react-router-dom";
import ProductAll from './Page/ProductAll';
import Login from './Page/Login';
import ProducDetail from './Page/ProducDetail';
import Header from './component/Header';
import PivateRoute from './route/PivateRoute';
import "./App.css";



const App = () => {

  const [loginok , setLoginok] = useState(false);

  useEffect(()=>{
    console.log(loginok)
  },[loginok])

  return (
    <div>
      <h2>gd</h2>
      <Header loginok={loginok}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setLoginok={setLoginok}/>}/>
        <Route path='/products/:id' element={<PivateRoute loginok={loginok}/>}/>
      </Routes>
    </div>
  )
} 

export default App;
