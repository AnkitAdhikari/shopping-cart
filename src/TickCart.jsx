import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./tickcart.css";
import { useState } from "react";
const TickCart = () => {
  const [cart, setCart] = useState([]);
  const [catalog, setCatalog] = useState("");
  console.log(cart);
  console.log(catalog);
  return (
    <div className='myApp'>
      <div className='nav-bar'>
        <NavBar itemsOnCart={cart.length} />
      </div>
      <section>
        <Outlet context={[cart, setCart, catalog, setCatalog]} />
      </section>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default TickCart;
