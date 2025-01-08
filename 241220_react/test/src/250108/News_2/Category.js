import React from 'react';

function Category({category, onSelect}) {

  const categories = [
    { name: 'All', text: '전체'},
    { name: 'Top', text: '탑뉴스'},
    { name: 'Sports', text: '스포츠'},
    { name: 'Technology', text: '테크놀로지'},
    { name: 'Business', text: '비지니스'},
    { name: 'Science', text: '사이언스'},
    { name: 'Health', text: '건강'},
    { name: 'Politice', text: '정치'},
    { name: 'Environment', text: '환경'},
  ]

  return (
    <div>
      {
        categories.map((c, idx) => (
          <button type="button" key={idx} onClick={() => onSelect(c.name)} className={category === c.name? 'active' : ''}>{c.text}</button>
        ))  
      }
    </div>
  );
}

export default Category;