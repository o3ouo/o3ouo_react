import React from 'react';

function Archiveser() {

  const img = [
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
    {img: '250110_router_test/a', alt: 'Archiveser img', file: '.jpg'},
  ]


  return (
    <div>

      <h2>
        Archives
        <span>(1970s)</span>
      </h2>
      <div className="contents">
        <figure className="img-box">
          {
            img.map((tem, idx) => (
              <img src={tem.img + (idx+1) + tem.file} alt={tem.alt}/>
            ))
          }
      
        </figure>
      </div>
    </div>
  );
}

export default Archiveser;