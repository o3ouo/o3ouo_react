import React, {useState, useEffect} from 'react';


function ProdCard({item}) {

  return (
    <div>
      <img src={item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <h3>{item.price}￦</h3>
      <p>size</p>
      <ul>
        {
          item.size.map((size, idx) => (
            <li key={idx}>{size}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default ProdCard;