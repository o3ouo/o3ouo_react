import React from 'react'

const ListItem = ({item}) => {
  return ( 
    <li className="list">
      <figure>
        <img src="/250121_contact/gojo.jpg" alt="contact-img" style={{borderRadius: "100%"}}/>
      </figure>
      <p className="name"><span>Name</span>{item.name}</p>
      <p className="number"><span>PhoneNumber</span>{item.phoneNumber}</p>
    </li>
  );
}
 
export default ListItem;