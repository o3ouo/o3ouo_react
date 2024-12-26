// function Box( {name="이름", text="설명"} ) {
  // 기본 값 설정 ┘
  // 원래 이렇게까지 할 필요는 없음

// function Box( props, name="기본 이름", text="기본 텍스트", children) {
  // props, 기본값, children의 값 모두 받아오기

function Box( {user = {name: "기본 이름", text: "기본 텍스트"}, children} ) {
  // user라는 객체에 기본 값을 설정

  // console.log(props);
  // react는 두 번씩 출력됨 (미리 적용하는 값, 실제 적용할 값)
  // 매개변수로 porps라는 이름 외에도 적용이 가능하지만 props라는 이름을 사용하기로 약속을 함

  return (
    <div className="box">
      {/* <h2>{props.title} : {props.name}</h2> */}
      {/* 매개변수처럼 사용하되 사용할 때에는 메소드처럼(this.key) 불러온다.  */}
      {/* <p>{props.text}</p> */}

      {/* 기본 값을 설정 */}
      {/* <h2>{name}</h2> */}
      {/* <p>{text}</p> */}

      <h2>{user.name}</h2>
      <p>{user.text}</p>
      <p>{children}</p>

    </div>
  );
}

export default Box;