import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './css/Weather.css'
import CurrentLocation from './CurrentLocation';

function WeatherSolo() {

  // 현재 위치 날씨 데이터 업데이트
  const [weather, setWeather] = useState(null);
  // 도시 날씨 데이터 업데이트
  const [cityWeather, setCityWeather] = useState(null);
  // input 입력 데이터 업데이트
  const [inputText, setInputText] = useState('');

  console.log("input:",inputText);


  // 위치 받아오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon);
      // 콜백함수 이용해 lat, lon 전달
      weatherData(lat, lon);
    })
  }

  // 현재 날씨 데이터 받아와서 weather에 할당
  const weatherData = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=306ac41a9c80c8da01b5661152208f37`);
      setWeather(response.data);
    } catch (error) {
      console.error('weather error 라고용');
    }
  }

  // setWeather을 업데이트하는 함수가 끝난 뒤 호출해야 함
  console.log("weather:",weather);

  // 도시 날씨 데이터 받아와서 cityWeather에 할당
  const cityData = async () => {
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&appid=306ac41a9c80c8da01b5661152208f37`);
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('city error 라고용')
    }
  }
  
  useEffect(() => {
    getCurrentLocation();
    cityData();
  }, [])
  
  console.log('cityWeather:', cityWeather);

  // input enter, click event
  const enter = (e) => { // 해당 이벤트를 매개변수로 받음
    if (e.key === 'Enter' && inputText.trim() !== "") { // enter 키가 눌렸을 때 && inputText에 공백이 없을 경우
      setCityWeather(inputText); // inputText의 값을 CityWeather에 업데이트
      setInputText(""); // inputText의 값을 초기화
    }


  }

  return (
    <div>

      <input 
      type="text"
      value={inputText}
      // 인풋창 입력시 input에 쓰여지는 값을 value에 담고 해당 값이 change 될 때마다 업데이트
      onChange={(e) => setInputText(e.target.value)}
      onKeyPress={enter}
      />

      <div className="city">
        {cityData}
      </div>

      <CurrentLocation weather={weather}/>
    </div>
  );
}

export default WeatherSolo;