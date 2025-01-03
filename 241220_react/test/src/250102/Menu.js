
function Menu({ setFilterType }) {

  return (
    <nav className="nav">
      <ul>
        <li><a href="#" onClick={() => setFilterType('All')}>All</a></li>
        <li><a href="#" onClick={() => setFilterType('Checked')}>Checked</a></li>
        <li><a href="#" onClick={() => setFilterType('Not Checked')}>Not Checked</a></li>
      </ul>
    </nav>
  );
}

export default Menu;