import './App.css';
import gojo from './gojo2.jpg';
// import로 출력할 때에는 이미지가 src 폴더 안에 있어야 한다. (잘 사용하지 않음)

// 밖으로 빼낸 다른 js를 출력할 때에는 import로 가져와야 한다
import About from './layout/About';

let name = "아롱";
console.log(name);

function App() {
  return (
    // {} : 스크립트 문법을 가지고 오는 공간
    <div className="img-box">
      <h1>{name}</h1>
      {/* 
        jsx 문법 
        : 최상단이 하나인 단일 경로 제작
        : 단독태그 사용 시 태그 끝에 / 추가 !
        : class 대신 className 사용
      */}

      <img src="/gojo.jpg" alt="gojo" />
      <img src={gojo} alt="gojo" />

      {/* 
        컴포넌트
        ㄴ 코드 재사용성 (동일한 컴포넌트를 여러 곳에서 사용할 수 있음)
        ㄴ 유지보수 : 각 컴포넌트는 독립적으로 관리되므로 수정이 쉽다.
        ㄴ 효율성 : UI를 논리적인 단위로 나누어 개발 가능
        ㄴ 하나의 기능만 담당하는 것이 좋음 (해당 섹션 안에 또 다른 섹션을 또 만들어서 사용하는 것은 좋지 않다. (완전 다른 주제))

        : 함수형 컴포넌트
        ㄴ Js 함수로 정의된다.
        ㄴ 간단하고 가독성이 좋다.
        ㄴ Hooks 를 사용해 상태관리(state)와 생명주기(lifecycle) 기능을 구현할 수 있다. 
        ㄴ 함수형 컴포넌트 제작시 함수명 첫 글자는 대문자 사용!

        새로운 페이지 컴포넌트 제작 시 필수 사항!!
        호출 (컴포넌트를 가져올 장소에 import)
        전송 (컴포넌트를 내보낼 장소에서 export)


        : 클래스형 컴포넌트
      */}

      <div className="box">
        <h2>title</h2>
        <p>contents</p>
      </div>

      {/* 컴포넌트로 만든 함수 출력 */}
      <div className="allBox">
      <Box />
      <Box />
      <Box />
      <Box />
      <About />
      
      </div>
      {/* 갯수만큼 출력됨 */}
    </div>

    // react 페이지 안에서 단독 태그를 사용할 때에는 <input />으로 사용한다
  );
}

// 컴포넌트는 const로 많이 사용한다
const Box = () => {
  return(
    <div className="box">
      <h2>box : title</h2>
      <p>box : contents</p>
    </div>
  )
}

export default App;
