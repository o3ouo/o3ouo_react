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
  const [login, setLogin] = useState(false);

  const data = async () => {

    const searchQuery = query.get('q') || "";

    try {
      const response = await axios.get(`http://localhost:5000/products?q=${searchQuery}`);
      setItem(response.data);

      console.log(item)

      const filterData = response.data.filter(item => 
        item.title.includes(searchQuery)
      )
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
    navigate(`/?q=${menu}`)
  };

  return (
    <div>
      <Nav menuList={menuList} menuClick={Click}/>

      <div className="contents">
        <ul>
          {
            item.map((tem, idx) => (
              <Link to={`http://localhost:5000/products?q=${tem.name}`}>
                <Item key={idx} tem={tem} />
              </Link>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default AllItem;