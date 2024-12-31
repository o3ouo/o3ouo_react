import React,{useState,useCallback} from 'react'

// useCallback : 성능 최적화를 위해 사용되는 훅 / 함수의 재생성을 방지하여 불필요한 렌더링을 줄이는데 사용
// 자식 컴포넌트에 함수를 props로 전달할거나 의존성 배열에 함수를 포함해야할 때 유용

// 함수 = useCallback(()=>{ 함수내용 },[의존성배열,배열 안의 값이 변경될 때만 새 함수를 생성])



function Ucallback() {

  const [count, setCount] = useState(0)

  // const Creset = ()=> {
  //   console.log("클릭")
  //   setCount(0)
  // }

  // 함수 메모이제이션
  const Creset = useCallback(()=>{
    console.log("클릭")
    setCount(0);
  },[])

  return (
    <div>
      
      <h1> 카운트 : {count} </h1>
      <button type='button' onClick={()=>setCount(count + 1)}>증가</button>
      <MemoReset Creset={Creset}/>
    </div>
  )
}

function Reset({Creset}){
  console.log("렌더링")
  return(
    <button type='button' onClick={Creset}>리셋</button>
  )
}

// 컴포넌트의 메모이제이션 > props가 변경되지 않은 경우 컴포넌트를 다시 렌더링하지 않음
const MemoReset  = React.memo(Reset)


export default Ucallback
