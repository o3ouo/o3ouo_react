import React from 'react';

function TemBox({item, onClose}) {
  return (
    <div className="tem-box">
      <button type="button" className="back-btn" onClick={onClose}>Back ←</button>

      <div className="box">
        <figure className="img">
          <img src={item.img} alt={item.name}/>
        </figure>
              
        <div className="t-box">
          <p className="name">{item.name}</p>
          <p className="nameEn">{item.nameEn}</p>
          <p className="kcal">{item.kcal} Kcal</p>
        </div>
      </div>
    </div>
  );
}

export default TemBox;