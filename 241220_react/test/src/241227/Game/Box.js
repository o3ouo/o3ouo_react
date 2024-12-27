function Box({ myChoice, comChoice, result }) {

  const win = result === "승리" ? "win" : result === "패배" ? "lose" : "draw"

  const lose = result === "패배" ? "win" : result === "승리" ? "lose" : "draw"

  return (
    <div className="wrap-box">
      <div className={`box me ${win}`}>
        <h2 className={`${myChoice.name} ${win}`}> You : {myChoice.name || "대기 중"}</h2>
        <figure className="img-box">
          <img src={myChoice.img} alt={myChoice.name} />
        </figure>
        <p className={`result ${win}`}>{result === "승리" ? "Win" : result === "패배" ? "Lose" : "Draw"}</p>
      </div>

      <div className={`box com ${lose}`}>
        <h2 className={`${comChoice.name} ${lose}`}> AI : {comChoice.name || "대기 중"}</h2>
        <figure className="img-box">
          <img src={comChoice.img} alt={comChoice.name} />
        </figure>
        <p className={`result ${lose}`}>{result === "패배" ? "Win" : result === "승리" ? "Lose" : "Draw"}</p>
      </div>
    </div>
    
  );
}

export default Box;