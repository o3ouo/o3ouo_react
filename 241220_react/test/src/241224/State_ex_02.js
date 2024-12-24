import {useState} from 'react';

function State_ex_02() {

  // 숫자 카운터 버튼 2개 1씩 증가, 1씩 감소
  const [count, setCount] = useState(0);

  const plus = () => {

    if (count < 10) {
      setCount (count + 1);
    }
  };

  const minus = () => {

    if (count > 0 ) {
      setCount (count -1);
    }
  };

  // 버튼을 클릭 했을 때 off일 경우 on으로 변하고, on일 때에는 off로 바뀌게
  const [on, setOn] = useState(false);

 
  let items = [
    { id: 1, category: 'fruit', name: 'apple'},
    { id: 2, category: 'vegetable', name: 'tomato'},
    { id: 3, category: 'fruit', name: 'banana'},
    { id: 4, category: 'vegetable', name: 'carrot'},
  ]

  const [select, setSelect] = useState('fruit'); // 초기값 fruit
  
  // 선택된 카테고리에 해당하는 데이터 필터링
  const filterItem = items.filter(item => item.category === select);
  
  return (
    <div>

      {/* 숫자 카운터 버튼 2개 1씩 증가, 1씩 감소 */}
      <div className="count-box" style={{marginBottom: '100px'}}>
        <h2>{count}</h2>
        <button type="button" onClick={plus}>Plus</button>    
        <button type="button" onClick={minus}>Minus</button>

        {/* 
        기능을 가진 함수를 각각 만들지 않고 함수를 바로 넣에서 사용 가능하다
        <button type="button" onClick={() => setCount(count < 10 ? count + 1 : count)}>Plus</button>    
        <button type="button" onClick={() => setCount(count > 0 ? count - 1 : count)}>Minus</button>    
        이렇게도 사용 가능
        */}
      </div>
      
      {/* 버튼을 클릭 했을 때 off일 경우 on으로 변하고, on일 때에는 off로 바뀌게 */}
      <div className="boll-box" style={{marginBottom: "100px"}}>
        <button onClick={() => setOn(!on)}> {on ? "off" : "on"} </button>
        <p>결과 : {on ? "on" : "off"}</p>
      </div>


      {/* 선택된 카테고리에 해당하는 데이터 필터링 */}
      <div>
        <h2>리스트</h2>
        <button type="button" onClick={() => {setSelect('fruit')}}>과일</button>
        <button type="button" onClick={() => {setSelect('vegetable')}}>야채</button>
      </div>

      <ul>
        {filterItem.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        {/* 리턴을 쓰지 않을 때에는 괄호()를 사용해야 한다 */}

        {/* 
        {filterItem.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })} 
        */}
      </ul>

    </div>
  );
}

export default State_ex_02;
