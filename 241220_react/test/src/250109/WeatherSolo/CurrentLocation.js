import React, {useState} from'react';

function CurrentLocation({weather}) {

  // 현재 날짜 가져오기
  const today = new Date();
  // 원하는 형식으로 날짜 설정
  // javascript의 Date의 객체에서 month는 0부터 11의 값을 가진다 > 0은 1월을 나타내고 11은 12월을 나타냄 > 1 ~ 12월을 출력해주기 위해 + 1
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  
  // 옵셔널 체이닝 변수? > 객체가 존재하지 않으면(uindefined 또는 null)상태에서 에러를 발생시키지 않고 대신 undiflned 
  // 절대온도(K)에서 섭씨온도(℃), 화씨온도(℉) 구하기
  // C = K - 273.15
  // F = K - 273.15 * 1.8 + 32
  return (
    <div className="today-weather">
        <h1>Today's Weather </h1>

        <div className="weather">
          <div className="box">
            <h3 className="city">{weather?.name}</h3>
            {/* Math.round() : 가장 가까운 정수로 반올림한 숫자 값을 반환  */}
            <h4>Absolute temperature : {weather?.main.temp} </h4>
            <h4>Celsius temperature : {Math.round(weather?.main.temp - 273.15)}℃</h4>
            <h4>Fahernheit temperature : {Math.round((weather?.main.temp - 273.15) * 1.8 + 32)} ℉</h4>
          </div>

          <div className="box">
            <h4>{formattedDate}</h4>
            <h4>{weather?.weather[0].main}</h4>
          </div>
        </div>
    </div>
  );
}

export default CurrentLocation;

