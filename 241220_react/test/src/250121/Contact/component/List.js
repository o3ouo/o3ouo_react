import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import Search from './Search';

const List = () => {

  // reducer에서 값 받아오기
  const {info, keyword} =  useSelector(state => state)


  // 연락처 저장
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = info.filter(item => item.name.includes(keyword)); // info.name에 keyword 찾기
      setFilterList(list); // keyword가 포함된 item을 담음
    } else { // 빈칸일 때에는
      setFilterList(info) // info 모두 담음
    }
  }, [keyword]); // 렌더링 시 키워드를 중시

  return ( 
    <div className="list-wrap">
      <div className="top">
        <h2 className="title">List</h2>
        <p className="total">총 인원 : {filterList.length}명</p>
      </div>
      <Search />
      <ul className="list-box">
        {
          filterList.map((item, idx) => (
            <ListItem key={idx} item={item}/>
            // filterList에 저장된 item을 props로 전달
          ))
        }
      </ul>
    </div>
  );
}
 
export default List;