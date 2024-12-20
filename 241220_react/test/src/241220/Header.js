import '../App.css';

const Header = () => {
  return (
      <header>
        <div className="h-inner">
          <h1 className="title">
            <a href="#">Logo</a>
          </h1>
          <nav>
            <ul>
              <li><a href="#">manu-1</a></li>
              <li><a href="#">manu-2</a></li>
              <li><a href="#">manu-3</a></li>
              <li><a href="#">manu-4</a></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header;