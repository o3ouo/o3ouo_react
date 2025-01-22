import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Search = () => {

  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const searchName = (event) => {
    event.preventDefault();
    dispatch({type:"SEARCH_NAME", payload: {keyword}});
    setKeyword('');
  }  

  return ( 
    <div>
      <form onSubmit={searchName}>
        <input type="text" placeholder="서치 할 네임 입력해라잉" value={keyword} onChange={(event) => setKeyword(event.target.value)}/>
        <button type="submit">🔍</button>
      </form>
      
    </div>
  );
}
 
export default Search;