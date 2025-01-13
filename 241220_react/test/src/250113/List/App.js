import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/ProductDetail' element={<ProductDetail />} />
      </Routes>

      
    </div>
  );
} 

export default App;