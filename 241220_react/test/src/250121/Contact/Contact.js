import React from 'react'
import './css/Contact.css'
import Save from './component/Save';
import List from './component/List';

const Contact = () => {
  return ( 
    <div className="wrap">
      <h1 className="logo-title">CONTACT 📞</h1>
      <div className="content" style={{display: "flex", justifyContent: "space-around"}}>
        <Save />
        <List />
      </div>
    </div>
  );
}
 
export default Contact;