import React, {useState, useMemo} from 'react';

// useMemo : 성능 최적화를 위해 사용되는 훅
// 배열에 지정된 값이 변경되지 않는 한 이전에 계산된 값을 재사용하도록
// 불필요한 연산을 방지하여 성능을 최적화 하는데 사용
// useMemo(() => 함수(a, b), [a, b]);
// a (첫 번째 인자) = 계산할 함수, 의존성 배열: 배열 안의 값이 변경될 때만 계산할 함수를 실행(반환할 값)

function Umemo() {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const calculation = (num) => {
    console.log("계산");
    return num * 2;
  }

  const memo = useMemo(() => calculation(count), [count])
  // 계산할 함수를 만들어서 useMeme의 함수로 적용하고 인자를 계산할 count를 적용
  // useMemo의 배열 안의 count는 count의 값이 변경될 때만 적용시킴 
  console.log(memo);
  
// ------------------------------------------------------

  const [list, setList] = useState([]);
  const [num, setNum] = useState('');

  const onChange = (e) => {
    setNum(e.target.value)
  }

  const onIn = () => {
    const NewList = list.concat(Number(num));
    // parson : 연산을 해서 숫자로 받아야 할 때 사용 / 또는 앞에 Number 사용
    setList(NewList);
    setNum('');
  }

  console.log(num);
  console.log(list);

  const get = (number) => {
    console.log("실행", number)
    if (number.length === 0) return 0; // 빈 배열이면 0 반환
    const total = number.reduce((acc, curr) => acc + curr, 0); // reduce를 사용해 총합 계산
    return total / number.length; // 평균값 반환
  }

  // list가 변경될 때만 실행
  const tt = useMemo(() => get(list), [list]);

  return (
    <div>
      <h2>count : {count} </h2>
      <h2>value : {value} </h2>
      <h2>memo : {memo} </h2>
      <button type="button" onClick={() => setCount(count + 1)}>count</button>
      <button type="button" onClick={() => setValue(value + 1)}>value</button>

      <br /><br /><br />

      <input type="text" value={num} onChange={onChange}/>
      <button type="button" onClick={onIn}>등록</button>
      <ul>
        {
          list.map((lists, idx) => (
            <li key={idx}>{lists}</li>
          ))
        }
      </ul>
      <h2>평균값 : {tt}</h2>
    </div>
  )
}

export default Umemo;