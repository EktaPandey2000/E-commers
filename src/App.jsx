import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./login";
import Home from "./Home";
import Products from "./products";
import Cart from "./cart";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">

        <div className="logo">
          ShopNow
        </div>

        <div className="nav-menu">

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/cart">
            🛒 My Cart
          </Link>

          <Link to="/login" className="login-button">
            Login
          </Link>

        </div>

      </nav>


      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="/order-success"element={<OrderSuccess />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;