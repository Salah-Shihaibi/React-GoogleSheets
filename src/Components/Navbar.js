import logo from "../images/logo.jfif";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const screenWidth = window.innerWidth;
  return (
    <>
      <nav className="top-nav rm">
        {/* Brand stay on left and does not collapes */}
        <div className="col-2 ver-center rm pl-5">
          <img
            className="rm"
            src={logo}
            width="auto"
            height="65px"
            alt="logo"
          />
          <div
            className="mobile nav-button rm"
            onClick={() => {
              setNav(!nav);
            }}
          >
            <i className="fas fa-bars rm"></i>
          </div>
        </div>
        {/* collapse item center */}
        {(nav || screenWidth > 800) && (
          <>
            <div className="col-8 flex-center flex-mobile-right rm slide" id="">
              <ul className="">
                <li className="cool-link">
                  <Link to="/" className="">
                    Home
                  </Link>
                </li>
                <li className="cool-link">
                  <Link to="/about" className="">
                    About
                  </Link>
                </li>
                <li className="cool-link">
                  <Link to="/news" className="">
                    News
                  </Link>
                </li>
                <li className="cool-link">
                  <Link to="/products" className="">
                    Products
                  </Link>
                </li>
                <li className="cool-link">
                  <Link to="/contacts" className="">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* collapse item right with dropdown */}
            <div
              className="flex-end flex-mobile-right pl-5 pl-10-m col-2 slide"
              id=""
            >
              <ul className="rm">
                <li className="rm">
                  <button className="rm button btn-sky" href="#">
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
