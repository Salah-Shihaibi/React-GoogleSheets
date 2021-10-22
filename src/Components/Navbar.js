import logo from "../images/logo.jfif";

const Navbar = () => {
  return (
    <>
      <nav className="top-nav rm">
        {/* Brand stay on left and does not collapes */}
        <div className="col-2 ver-center rm pl-5">
          <img className="rm" src={logo} width="auto" height="65px" alt="logo" />
          <h3 className="rm">.</h3>
          <div className="mobile nav-button rm">
            <i className="fas fa-bars rm"></i>
          </div>
        </div>
        {/* collapse item center */}
        <div className="col-8 flex-center flex-mobile-right rm" id="">
          <ul className="">
            <li className="cool-link">
              <a className="" href="/">
                Home
              </a>
            </li>
            <li className="cool-link">
              <a className="" href=" /#/About">
                About
              </a>
            </li>
            <li className="cool-link">
              <a className="" href=" /#/News/0">
                News
              </a>
            </li>
            <li className="cool-link">
              <a className="" href=" /#/Contact">
                Contact
              </a>
            </li>
            <li className="cool-link">
              <a className="" href=" /#/Products">
                Products
              </a>
            </li>
          </ul>
        </div>
        {/* collapse item right with dropdown */}
        <div className="rm flex-end flex-mobile-right pl-5 col-2" id="">
          <ul className="rm">
            <li className="rm">
              <button className="rm button" href="#" >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
