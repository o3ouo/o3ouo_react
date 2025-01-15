import React from 'react';

function Item({tem, onClick}) {
  
  return (
    <div onClick={onClick}>
      <img src={tem.img} alt={tem.title} />
      <h2>{tem.title}</h2>
      <h3>{tem.price}￦</h3>
      <p>size</p>
      <ul>
        {
          tem.size.map((size, idx) => (
            <li key={idx}>{size}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Item;