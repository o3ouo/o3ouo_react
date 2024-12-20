const Header = () => {
  return (
    <div className="h-wrap">
      {/* header */}
      <header className="header">
        <div className="h-inner">
          <h1 className="title">
            <a href="#">Logo</a>
          </h1>
          <nav className="nav">
            <ul>
              <li><a href="#">manu-1</a></li>
              <li><a href="#">manu-2</a></li>
              <li><a href="#">manu-3</a></li>
              <li><a href="#">manu-4</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header;