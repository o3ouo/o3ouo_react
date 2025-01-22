import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Form = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const add = (event) => {
    event.preventDefault(); // 새로고침 방지 필수
    if (name.trim() !== '' && phone.trim() !== '') {
      dispatch({type: "ADD", payload: {name, phone}})
      setName('');
      setPhone('');
    }
  }

  return ( 
    <div className="form">
      <form onSubmit={add}>
        <div className="name" >
          <label>Name</label>
          <input type="text" placeholder="네임쓰 ~" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="phone">
          <label>PhoneNumber</label>
          <input type="text" placeholder="폰 넘버 ~" value={phone} onChange={(event) => setPhone(event.target.value)}/>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
 
export default Form;