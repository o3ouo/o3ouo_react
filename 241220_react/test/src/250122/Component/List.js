import React from 'react'
import Search from './Search';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';



const List = () => {
  const {contList, keyword} = useSelector(state => state);
  // console.log(contList)

  // filter list 생성
  const filterList = keyword ? contList.filter(item => item.name.includes(keyword)) : contList;
  

  return ( 
    <div className="list">
      <Search />
      <div className="list_i">
        <h4>Contact : {filterList.length}</h4>
        {
          // contList.map((item, idx) => (
          //   <ListItem key={idx} item={item}/>
          // ))
          filterList.map((item, idx) => (
            <ListItem key={idx} item={item}/>
          ))
        }
      </div>
    </div>
  );
}
export default List;