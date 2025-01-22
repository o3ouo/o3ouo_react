import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Search = () => {

  // searchText State
  const [searchText, setSearchText] = useState('');
  // search 값 보내기
  const dispatch = useDispatch();


  console.log(`searchText:${searchText}`)

  // search click event
  const search = (e) => {
    e.preventDefault();
    dispatch({type:"SEARCH", payload:{searchText}});
    setSearchText('');
  }

  return ( 
    <div className="search">
      <form className="search-box" onClick={search}>
        <input 
          type="text" 
          placeholder="검색 함 해봐라 ~"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
 
export default Search;