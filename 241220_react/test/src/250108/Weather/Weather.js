import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './css/Weather.css';
import ClipLoader from 'react-spinners';

function Weather() {

  // 현위치 업데이트
  const [location, setLocation] = useState(null);
  // input text
  const [inputText, setinputText] = useState('');
  // 받아올 city 정보
  const [city, setCity] = useState([]);


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; // 위도
      let lon = position.coords.longitude; // 경도
      // 콜백함수를 사용해 부르는 방법
      getWeather(lat, lon);
    });
  }
  
  // 다른 함수 안에 있는 값을 가져오기 위한 방법
  const getWeather = async (lat, lon) => { 
    console.log("현위치", lat, lon);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=437c646e7074c33fcb0012fb12435f42`
    try {
      const response = await axios.get(url);
      setLocation(response.data)
      console.log("위치", response.data);
    } catch(error) {
      console.error("error")
    }
  }
  console.log("location:",location)

  const getCityWeather = async() => {
    console.log('city');
    const data = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=437c646e7074c33fcb0012fb12435f42`;
    try {
      const response = await axios.get(data);
      setCity([response.data] || []);
      console.log("City", response.data);
    } catch(error) {
      console.log('error다 이녀석아');
    }
  }

  console.log("city console", city)

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>

      {/* 
        1. 앱 실행시 현재 위치를 기반으로 한 날씨 정보 표시
        2. 날씨 정보에는 도시이름, 섭씨온도, 화씨온도, 날씨상태(waether.description)
        3. 4개의 도시 버튼, 1개의 현재 위치 버튼 or input 박스, 현재 위치 버튼
        4. 도시 버튼 or 입력 시 해당 도시의 날씨 정보 표시
        5. 현재위치 버튼 클릭시 다시 현재 위치 기반 날씨 정보 표시
        6. 로딩 스피너 라이브러리 > npm install react-spinners
      */}

      <header>
        <h1>Wondering what the weather is like?</h1>
        <button type="button" className="l-btn" onClick={getCurrentLocation}>Your current location</button>
      </header>

      <form 
      action="#" 
      className="input-wrap"
      onSubmit={(e) => {
        e.preventDefault();
        getCityWeather();
      }}>
        <input 
        type="text"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)} 
        placeholder="Enter city name"/>
        <button type="button">Search</button>
      </form>

      <div className="weather">
        {location && (
          <div>
            <p>City: {location.name}</p>
            <p>Temperature: {Math.round(location.main.temp - 273.15)}℃</p>
            <p>Weather: {location.weather[0].descripttion}</p>
          </div>
        )}

        {city.map((c) => (
          <div key={c.id}>
            <h2>{c.name} Weather</h2>
            <p>Temperature: {Math.round(c.main.temp - 273.15)}℃</p>
            <p>Weather: {c.weather[0].descripttion}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Weather;