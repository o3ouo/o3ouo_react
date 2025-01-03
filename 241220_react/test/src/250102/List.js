import React, {useState, useEffect} from 'react';

function List({list, setList, filterType}) {

  // checkbox를 click한 항목의 checked 상태를 반전
  const check = (id) => {
    const updatedList = list.map(item => // list.map을 통해 특정 조건을 만족하는 항목만 변경하고, 나머지는 그대로 반환. / 변경된 배열을 생성 
      item.id === id ? {...item, checked: !item.checked} : item);
      // 현재 항목의 id와 클릭된 항목의 id가 같은지 확인. / 같으면 해당 항목의 checked 값을 반전 (true -> false) / 다르면 기존 값을 그대로 유지.
      // ...item : 스프레드 연산자 > 기존 항목의 모든 속성(id, text, checked)을 복사. / checked 속성만 반전 : !item.checked: true -> false, false -> true.
      setList(updatedList);
  }

  // del btn click remove
  const remove = (id) => {
    const updatedList = list.filter(item => (item.id !== id)); // 현재 항목의 id가
    setList(updatedList); // list 상태를 새 배열로 상태 업데이트.
  }

  const filteredList = list.filter(item => {
    if (filterType === "Checked") return item.checked;
    if (filterType === "Not Checked") return !item.checked;
    return true; // "All" 조건일 경우 모든 항목 반환
  })

  const Nlist = filteredList.map(item => ( // list.map을 사용하여 항목을 반복 처리.
    <li key={item.id} className="check-wrap"> 
      {/* 체크박스 클릭시 check 함수 호출 */}
      <input 
      type="checkbox" 
      id={`check_btn_${item.id}`}
      checked={item.checked || false} 
      onChange={() => check(item.id)}/>
      {/* 체크박스를 숨겨두고 대신 꾸미는 label */}
      <label htmlFor={`check_btn_${item.id}`} className="checkbox_label" >
        {/* 텍스트 */}
        <span>{item.text}</span>
      </label>
      {/* delete btn 클릭시 remove 함수 호출 */}
      <button type="button" className="del-btn" onClick={(e) => {
        e.stopPropagation();
        remove(item.id)}}>Del</button>
      </li>
  ))

  return (
    <section className="list-wrap">
      <ul className="list">{Nlist}</ul>
    </section>
  );
}

export default List;