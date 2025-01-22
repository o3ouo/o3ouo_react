import React from 'react'

const ListItem = ({item}) => {
  return ( 
    <div>
      <div className="item">
        <img src="https://i.pinimg.com/1200x/b6/a2/2e/b6a22ebc3c1ef0e9c3430214fc85dfe0.jpg" alt="person" style={{width: "100px", paddingTop: "16px", borderRadius: "100%"}}/>
        <h3>{item?.name}</h3>
        <p>{item?.phone}</p>
      </div>
    </div>
  );
}
 
export default ListItem;