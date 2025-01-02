import React, {useState, useEffect} from 'react';

function SubMenu({list, setList}) {

  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    const allSelected = list.every((item) => item.checked);
    setAllChecked(allSelected);
  }, [list]);
  
  // all checked
  const allCheck = (event) => {
    // allChecked의 현재 상태
    const isChecked = event.target.checked;
    const updatedList = list.map((item) => ({
      ...item, 
      checked: isChecked,
    }));
    setList(updatedList);
  };

  // all remove
  const allRemove = () => {
    const updatedList = list.filter((item) => !item.checked);
    setList(updatedList);
  };

  return (
    <div className="sub-menu">
      <input 
      type="checkbox" 
      className="all-ck" 
      id="all-ck" 
      checked={allChecked}
      onChange={allCheck} />
      <label htmlFor="all-ck" className="all-label">
        <span>All Cheked</span>
      </label>
      <figure className="icon-box" onClick={allRemove}>
        <img src="/250102_todo/delete.png" alt="delete icon" />
      </figure>
    </div>
  );
}

export default SubMenu;