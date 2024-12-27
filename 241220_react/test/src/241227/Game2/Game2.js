import React, {useState} from 'react';
import './css/Game2.css'
import Box from './Box';

const game = {
  rock: {
    name: "바위",
    img: "/241227_game/rock.jpg",
  },
  scissors: {
    name: "가위",
    img: "/241227_game/scissors.jpg"
  },
  paper: {
    name: "보",
    img: "/241227_game/paper.jpg"
  }
}

function Game2() {

  const [user , setUser] = useState(null);
  const [com, setCom] = useState(null);
  const [result, setResult] = useState("");

  const play = (choice) => {
    setUser(game[choice]);
    console.log("play", choice);
    let comCh = randomCh();    
    setCom(comCh);
    setResult(win(game[choice], comCh))
    console.log(setResult)
  }

  const win = (user, com) => {
    console.log("user:", user, "com:", com)

    if( user.name === com.name ) {
      return "무승부";
    } else if ( user.name === "바위" ) {
      return com.name === "가위" ? "승" : "패";
    } else if ( user.name === "가위" ) {
      return com.name === "보" ? "승" : "패";
    } else if ( user.name === "보" ) {
      return com.name === "바위" ? "승" : "패";
    }
  } 

  // 객체를 배열로 담아서 랜덤으로 돌림
  const randomCh = () => {
    // Object.keys : 객체의 키값만 추출해 배열로 만들어주는 함수
    let gameArray = Object.keys(game);
    console.log(gameArray);

    let randomItem = Math.floor(Math.random() * gameArray.length);
    console.log(randomItem);

    let final = gameArray[randomItem];
    console.log(final);

    return game[final];
  }
  
  return (
    <div>
      <div className="allbox">
        <Box name="사용자" item={user} result={result}/>
        <Box name="컴퓨터" item={com} result={result}/>
      </div>

      <div className="btnbox">
        {/* 클릭을 했을 때 함수 호출을 바로 하게되면 즉시 실행이 되기 때문에 onClick 안에 함수로 호출해야 함 */}
        <button type="button" onClick={() => play("scissors")}>가위</button>
        <button type="button" onClick={() => play("rock")}>바위</button>
        <button type="button" onClick={() => play("paper")}>보</button>
      </div>
    </div>
    
  );
}

export default Game2;