import React, { useState } from "react";

function Home() {

  const [num, setNum] = useState(0);

  const plus = () => {
    setNum(num + 1);
  }

  const minuse = () => {
    setNum(num - 1);
  }

  return (
    <div>
      <h1>Home</h1>
      <h2>{num}</h2>

      <button type='button' onClick={plus}>Plus</button>
      <button type='button' onClick={minuse}>Minuse</button>
    </div>
  );
}

export default Home;