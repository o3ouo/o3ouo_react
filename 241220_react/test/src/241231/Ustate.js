import React, {useState} from 'react';
// 부모에 use가 있어도 컴포넌트의 필요한 값을 찾아 넣어서 사용해야 함

function Ustate() {
  
  const [list, setList] = useState([
    {id: 1, text: '김밥'},
    {id: 2, text: '라면'},
    {id: 3, text: '우동'},
  ]);

  const [inputText, setInputText] = useState('');
  const [next, setNext] = useState(4); // 새로운 항목을 추가시 id

  const onChange = (e) => {
    setInputText(e.target.value);
    // target을 사용해서 input의 value 값을 받아옴
  } 

  const onClick = () => {
    // concat : 배열이나 문자열을 결합시 사용 > 기존 배열이나 문자열을 변경하지 않고 새로운 배열이나 문자열 반환
    const news = list.concat({
      id: next,
      text: inputText
    })
    setNext(next + 1); // next 값에 1을 더해준다
    setList(news); // list를 업데이트
    setInputText(''); // input text를 빈 박스 형태로 만듬
  }
  
  const remove = (e) => {
    const removeId = list.filter(name => (name.id !== e));
    setList(removeId);
  }

  const Nlist = list.map(lists => (
    <li key={lists.id} onDoubleClick={() => remove(lists.id)}>{lists.text}</li>
  ));

  console.log(inputText);

 
  return (
    <div>
      {/* li 더블 클릭시 해당 리스트 사라지게 */}
      <input type="text" value={inputText} onChange={onChange} />
      <button type="button" onClick={onClick}>Add</button>
      <ul>
        {Nlist}
      </ul>
    </div>
  );
}

export default Ustate;