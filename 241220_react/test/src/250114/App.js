import React from 'react';
import {Route, Routes} from 'react-router-dom'
import ProductAll from './ProductAll';
import './css/App.css';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<ProductAll />}></Route>
      </Routes>
    </div>
  );
}

export default App;