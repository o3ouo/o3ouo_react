import React from 'react';
import ProductList from './ProductList'
import Cart from './Cart';


function App() {
  return (
    <div style={{maxWidth: "1200px", margin: "100px auto"}}>
      <h1>쇼핑몰 카트</h1>
      <div className="content" style={{display: "flex", justifyContent: "space-between"}}>
        <ProductList />
        <Cart />
      </div>
    </div>
  )
}

export default App;