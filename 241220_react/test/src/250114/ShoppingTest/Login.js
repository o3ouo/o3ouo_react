
function Login() {
  return (
    <div>
      <h2>로그인 하세요</h2>
      <form action="#">
        <label htmlFor="id">ID : </label>
        <input type="email" placeholder="email" id="id"/>
        <label htmlFor="ps">PASSWORD : </label>
          <input type="password" />
      </form>
    </div>
  );
}

export default Login;