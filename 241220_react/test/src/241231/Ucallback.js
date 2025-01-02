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

      <br /><br /><br />

      <table>
        <tr>
          <th>특징</th>
          <th>useCakkback</th>
          <th>useMemo</th>
        </tr>
        <tr>
          <th>목적</th>
          <td>특정 함수를 메모이제이션하여 동일한 참조를 유지 </td>
          <td>계산량이 많은 값을 메모이제이션하여 동일한 값을 반환</td>
        </tr>
        <tr>
          <th>반환 값</th>
          <td>메모이제이션된 함수</td>
          <td>메모이제이션된 값</td>
        </tr>
        <tr>
          <th>사용 사례</th>
          <td>
            - 자식 컴포넌트에 props로 전달되는 함수 <br />
            - 이벤트 핸들러
          </td>
          <td>
            - 복잡한 계산 로직 <br />
            - 리스트 필터링 / 정렬 등
          </td>
        </tr>
      </table>
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
