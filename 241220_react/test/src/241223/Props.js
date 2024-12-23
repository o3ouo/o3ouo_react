import Box from "./Box"

function Props() {

  const user = { name:"아롱", text:"아롱이에여"};

  return (
    <div>
      {/* 
      Props
      : 부모 컴포넌트가 자식 컴포넌트에 전달하는 데이터 함수의 매개변수처럼 동작함

      Props 사용시 주의사항
      - Props는 읽기 전용, 자식 컴포넌트에서 직접 수정 불가
      - Props는 단방향 데이터 흐름을 유지해야 함. 데이터는 항상 부모에서 자식으로 흘러야 함
      - Props의 타입을 검사하고 기본값을 설정하는 것이 좋음
      - 너무 많은 컴포넌트를 거쳐 props를 전달하는 것은 좋지 않음
      - 함수를 props로 전달할 때는 불필요한 리렌더링을 피하기 위해 useCallback 등을 사용해야 함.

      props.children
      태그 사이의 내용을 부여해주는 children
      컴포넌트의 내부에 포함된 요소를 렌더링 시

      */}

      {/* <div className="box">
        <h2>title</h2>
        <p>contents</p>
      </div>
      <div className="box">
        <h2>title</h2>
        <p>contents</p>
      </div> 
      위의 방식으로 만드는 것이 아닌 중복되는 Box 컴포넌트를 제작해 컴포넌트만 불러온다.*/}
      {/* <Box name="김태완" text="하이 태완 방가"/>
      <Box name="김대왕" text="하이 대왕 방가"/>
      <Box name="김두형" text="하이 두형 방가"/>
      <Box name="김두홤" text="하이 두홤 방가"/> */}
      
      {/* Box object 자체 값이 적용됨 */}
      <Box />
      {/* 
      위 코드처럼 Box 컴포넌트를 호출했는데 user를 전달하지 않으면, user는 기본적으로 undefind가 된다. 그 상태에서 user.name이나 user.text를 읽으려고 하면 "Cannot read property 'name"
      */}
      
      <br /><hr /><br />

      {/* user prop 전달 */}
      <Box user={user} />

      <br /><hr /><br />

      {/* children */}
      <Box name="히히"> 
      {/* 
      객체로 기본 값을 정했을 경우에는 서로 다른 이름을 사용하지 못함
      서로 다른 이름을 각각 사용하고 싶을 경우에는 객체로 기본 값을 주면 안된다 
      */}
        <h3>내가 아롱이다</h3>
      </Box>
      
    </div>
  );
}

export default Props;