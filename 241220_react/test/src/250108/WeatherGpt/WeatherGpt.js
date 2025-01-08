import React, {useState, useEffect} from 'react';
import axios from 'axios';

function WeatherGpt() {

  // 1-3. 상태로 데이터 저장(useState)
  // API에서 가져온 데이터를 setLocationWeather로 상태에 저장
  const [locationWeather, setLocationWeather] = useState(null);

  const [cityWeather, setCityWeather] = useState(null);

  // 4. 입력 필드로 날씨 정보 표시 : 사용자가 입력한 도시 이름의 날씨 데이터를 표시
  const [inputText, setInputText] = useState("");

  // 1. 앱 실행 시 현재 위치를 기반으로 한 날씨 정보 표시 
  const getCurrentLocationWeather = async () => {

    // 1-1. 현재 위치 날씨 가져오기    
    // 사용자가 위치 접근 권한을 허용하면 위도와 경도를 반환
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      console.log('현재 위치 출력: ', lat, lon);
      // 1-2. OpenWeather API로 날씨 데이터 가져오기
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=306ac41a9c80c8da01b5661152208f37`;
      try {
        const response = await axios.get(url); // API 호출
        console.log('날씨 데이터 출력:', response.data);
        setLocationWeather(response.data); // 상태에 저장
      } catch (error) {
        console.error('error다 이녀석아');
      }
    })
  }

  // 3. 4개의 도시 버튼 및 현재 위치 버튼 : 버튼을 눌렀을 때 선택된 도시의 날씨 데이터를 표시
  // 3-1. 버튼 만들기 > 4개의 버튼을 만들어 각 버튼에 도시 이름 설정
  // 3-2. 버튼 클릭 시 API 호출 > 버튼을 클릭하면 해당 도시 이름으로 OpenWeather API를 호출
  const getCityWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=306ac41a9c80c8da01b5661152208f37`;
    try {
      const response = await axios.get(url);
      setCityWeather(response.data); // 상태에 저장
    } catch (error) {
      console.error('error라고 이녀석아');
    }
  };

  // 4-2. 엔터 키로 데이터 검색 
  // > onSubmit 이벤트로 폼 제출 시 API 호출
  // > e.preventDefault()로 기본 동작 막기
  const handleSearch = (e) => {
    e.reventDefault();
    if (inputText) {
      getCityWeather(inputText);
    }
  }

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  return (
    <div>
    {/* 
    1. 현재 위치 가져오기
    > navigator.geolocation.getCurrentPosition을 사용하여 현재 위치의 위도와 경도를 가져온다.
    
    2. OpenWeather API로 데이터 가져오기
    > API를 호출하여 위도와 경도를 기반으로 날씨 데이터를 가져온다.

    3. 데이터를 상태로 저장
    > React의 useState로 날씨 데이터를 저장하고 이를 렌더링 한다.
    */}

    <h1>Weather App</h1>

    {/* 
    2. 날씨 정보 표시 : API에서 가죠온 데이터를 화면에 출력
    
    2-1. 표시할 데이터 확인
    > API 응답 데이터에서 필요한 값 :
    - name : 도시 이름
    - main.temp : 온도 (절대온도, 켈빈)
    - weather[0].description : 날씨 상태

    2-2. 온도 변환
    > API에서 제공하는 온도는 켈빈(K) 단위이다.
    - 섭씨(℃) : temp - 273.15
    - 화씨(℉) : (temp - 273.15) * 9/5 + 32
    */}

    {/* 2-3. JSX를 통해 데이터 출력 */}
    {locationWeather && ( // 데이터가 존재할 때만 출력
      <div>
        <h2>Current Location Weather</h2>
        <p>City: {locationWeather.name}</p>
        <p>Temperature: {Math.round(locationWeather.main.temp - 273.15)}℃</p>
        <p>Temperature: {Math.round((locationWeather.main.temp - 273.15) * 9/5 + 32)}℉</p>
        <p>Weather: {locationWeather.weather[0].description}</p>
      </div>
    )}

    {/* 
    4-1. 입력 필드 만들기 
    > useState로 입력 값을 상태로 관리 
    > onChange 이벤트로 입력 값을 업데이트  
    */}
    <form onSubmit={handleSearch}>
      <input
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholer="Enter city name"
      />
      <button type="submit">Search</button>
    </form>

    <div className="btn-wrap">
      <button type="button" onClick={() => getCityWeather("seoul")}>Seoul</button>
      <button type="button" onClick={() => getCityWeather("London")}>London</button>
      <button type="button" onClick={() => getCityWeather("New York")}>New York</button>
      <button type="button" onClick={() => getCityWeather("sydney")}>Sydney</button>
    </div>

    {cityWeather && (
      <div>
        <h2>{cityWeather.name} Weather</h2>
        <p>Temperature: {Math.round(cityWeather.main.temp - 273.15)}℃</p>
        <p>Weather: {cityWeather.weather[0].description}</p>
      </div>
    )}
    </div>
  );
}

export default WeatherGpt;