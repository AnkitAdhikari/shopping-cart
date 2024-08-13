import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./tickcart.css";
const TickCart = () => {
  return (
    <div className='myApp'>
      <div className='nav-bar'>
        <NavBar />
      </div>
      <section>
        <Outlet />
      </section>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default TickCart;
