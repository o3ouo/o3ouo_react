import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import ProductAll from "./Page/ProductAll";
import ProducDetail from "./Page/ProducDetail";
import Login from "./Page/Login";
import PrivateRoute from './Rout/PribateRoute';

function App() {

  const [loginok, setLoginok] = useState(false);

  useEffect(() => {
    console.log(loginok);
  }, [loginok])

  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductAll />}></Route>
        <Route path='/login' element={<Login setLoginok={setLoginok} />}></Route>
        <Route path='/products/:id' element={<ProducDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;