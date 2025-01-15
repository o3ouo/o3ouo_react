import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginok}) => {

  const navigate = useNavigate();

  const login = (event) => {
    // preventDefault : 기본 설정 제거 (form이 새로고침 하는 것을 방지)
    event.preventDefault();
    setLoginok(true);
  }

  return (
    <div>
      <form action="#" onSubmit={(event) => login(event)}>
        <div className="idpw">
          <div className="id">
            <label htmlFor="id">ID</label>
            <input type="text" id='id' />
          </div>
          <div className="pw"></div>
          <label htmlFor="pw">PW</label>
          <input type="password" id='pw' />
        </div>
        <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default Login;