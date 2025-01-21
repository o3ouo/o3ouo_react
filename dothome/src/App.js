import { Route,Routes ,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";


function App() {
  return (
    <div>
      <h1><Link to="/gojo">Home</Link></h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>

      <Routes>
        <Route path="/gojo" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <img src="./img/gojo.jpg" alt="gojo" />
      <img src="./img/gojo.jpg" alt="gojo" />
    </div>
  );
}

export default App;