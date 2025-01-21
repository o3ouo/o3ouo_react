import React, {useState} from 'react'
import { useDispatch } from 'react-redux';

const Save = () => {

  const [name, setName] = useState("");
  const [call, setCall] = useState("");

  console.log(name)
  console.log(call)

  return ( 
    <div className="save-wrap">
      <h2 className="title">Save</h2>

      <form action="#" className="form">
        <div className="top">
          <label htmlFor="name">Name : </label>
          <input 
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        
        <div className="bottom">
          <label htmlFor="call">Phone Number : </label>
          <input 
            type="text"
            id="call"
            value={call}
            onChange={(e) => setCall(e.target.value)}
            />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default Save;