import React from 'react';

function Footer({ filter, setFilter, clear }) {
  return (
    <div>
      {/* disabled : 조건에 해당할 때 버튼 비활성화 */}
      <button type="button" onClick={() => setFilter('All')} disabled={filter === 'All'}>ALL</button>
      <button type="button" onClick={() => setFilter('active')} disabled={filter === 'active'}>CLEAR</button>
      <button type="button" onClick={() => setFilter('completed')} disabled={filter === 'completed'}>PLAN</button>
      <button type="button" onClick={clear}>CLEAR DELETE</button>
    </div>
  );
}

export default Footer;