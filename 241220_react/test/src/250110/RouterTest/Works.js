import React from 'react';

function Works() {

  const work = [
    {name: "work1", img: "/250110_router_test/work1.ccb9404b.jpeg",},
    {name: "work2", img: "/250110_router_test/work2.255236f5.jpeg",},
    {name: "work3", img: "/250110_router_test/work3.8b912330.jpeg",},
    {name: "work4", img: "/250110_router_test/work4.58a333e8.jpeg",}
   ]
  
  return (
    <div className="box">
      <figure className="img-box">
        {
          work.map((w, i) => (
            <img src={w.img} alt={w.name} key={i}/>
          ))
        }
      </figure>
      <p className="t">
        1960s
        <span>VIEW MORE +</span>
      </p>
   </div>
  );
}

export default Works;