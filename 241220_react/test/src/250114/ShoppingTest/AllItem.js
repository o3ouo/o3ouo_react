import React, {useState, useEffect} from 'react';
import {useNavigate, useSearchParams, Link} from 'react-router-dom'
import axios from 'axios';
import Nav from './Nav';
import Item from './Item';



function AllItem() {

  const [item, setItem] = useState([]);
  const [menu, setMenu] = useState('');
  const menuList = ['티셔츠', '스웨트 셔츠', '재킷', '후드', '자켓', '팬츠'];
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const [login, setLogin] = useState(false);

  const data = async () => {
    const searchQuery = query.get('q') || "";
    try {
      const response = await axios.get(`http://localhost:5000/products?q=${searchQuery}`);
      const filterData = response.data.filter(item => item.title.includes(searchQuery));
      setItem(filterData);
    } catch (error) {
      console.error('error 라구용');
    }
  };

  useEffect(() => {
    data();
  }, [query]);

  // click event
  const Click = (select) => {
    setMenu(select);
    navigate(`/?q=${select}`)
  };

  const search = (e) => {
    if (e.key === 'Enter') {
      let keyword = e.target.value;
      console.log(keyword)
      navigate(`/?q=${keyword}`)
    }
  }

  // detail move
  const move = (tem) => {
    navigate(`/products/${tem.id}`);
  };


  return (
    <div>
      <Nav menuList={menuList} menuClick={Click} item={item} onKeyPress={search}/>
      <form action="#">
        <input type="text" onKeyPress={(e) => search(e)}/>
        <button type="button" >search</button>
      </form>

      <div className="contents">
        <ul>
          {
            item.map((tem) => (
              <Item key={tem.id} tem={tem} onClick={() => move(tem)}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default AllItem;