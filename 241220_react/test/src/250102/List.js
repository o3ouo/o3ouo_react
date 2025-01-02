import React, {useState, useEffect} from 'react';

function List({list, setList}) {

  // check click
  const check = (id) => {
    const updatedList = list.map(item =>
      item.id === id ? {...item, checked: !item.checked} : item);
      setList(updatedList);
  }

  // del btn click remove
  const remove = (idRemove) => {
    const removeUp = list.filter(item => (item.id !== idRemove));
    setList(removeUp);
  }

  const Nlist = list.map(item => (
    <li key={item.id} className="check-wrap">
      <input 
      type="checkbox" 
      id={`check_btn_${item.id}`}
      checked={item.checked || false} 
      onClick={() => check(item.id)}/>

      <label htmlFor={`check_btn_${item.id}`} className="checkbox_label" >
        <span>{item.text}</span>
      </label>
      <button type="button" className="del-btn" onClick={() => remove(item.id)}>Del</button>
      </li>
  ))

  return (
    <section className="list-wrap">
      <ul className="list">{Nlist}</ul>
    </section>
  );
}

export default List;