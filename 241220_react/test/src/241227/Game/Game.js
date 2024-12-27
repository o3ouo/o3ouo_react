import React, {useState} from 'react';
import './css/Game.css';
import Box from './Box';

function Game() {

  const choices = [
    {name: "가위", img: "/241227_game/scissors.jpg"},
    {name: "바위", img: "/241227_game/rock.jpg"},
    {name: "보", img: "/241227_game/paper.jpg"},
  ]

  const [myChoice, setMyChoice] = useState("");
  const [comChoice, setComChoice] = useState("");
  const [result, setResult] = useState("");

  const randomChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const getResult = (me, com) => {
    if (me.name === com.name) return "무승부";

    if (
      (me.name === "가위" && com.name === "보") ||
      (me.name === "바위" && com.name === "가위") ||
      (me.name === "보" && com.name === "바위")
    ) {
      return "승리";
    } else {
      return "패배";
    }
  };

  const vsClick = (choice) => {
    const computerChoice = randomChoice();
    setMyChoice(choice);
    setComChoice(computerChoice);
    setResult(getResult(choice, computerChoice));
  };

  return (
    <div className="game">
      {/* 
        박스 2개 (타이틀, 사진, 결과) > 컴포넌트
        가위 바위 보 버튼
        버튼을 클릭하면 클릭한 값이 박스에 보이게
        컴퓨터는 랜덤하게 아이템 선택
        결과를 가지고 누가 이겼는지 승패 보이게
        승패 결과에 따라 테두리 색이 바뀌게
        if문, 삼항연산
      */}
      <div className="vs">
        <Box myChoice={myChoice} comChoice={comChoice} result={result}/>
      </div>

      <div className="btn-box">
        {choices.map((choice) => (
          <button type="button" className="btn" key={choice.name} onClick={() => vsClick(choice)}>{choice.name}</button>
        ))}
      </div>
      
    </div>
  );
}


export default Game;