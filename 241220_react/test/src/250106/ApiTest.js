import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ApiTest() {

  const [post, setPost] = useState([]);

  const click = async () => {
    try {
      const response = await axios.get('https://newsdata.io/api/1/sources?country=kr&apikey=pub_64517ea65789adb43dfbc3d97dfab94e83340');
      setPost(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log('error');
    }
  }

  return (
    <div>
      <button type="button" onClick={click}> Click </button>
      <ul>
        {
          post.map((posts) => (
            <li key={posts.id}>
              <a href={posts.link}></a>
              <img src={posts.icon} alt={posts.title} />
              <h2>{posts.name}</h2>
              <p>{posts.description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ApiTest;