import logo from "../images/logo.jfif";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="container-nav">
          <div className="col-2 pc">
            <img
              src={logo}
              width="auto"
              height="90px"
              alt="logo"
            />
          </div>
          <div className="col-4 p-2-m">
            <div>
              <b style={{fontWeight: "bold"}}>Contacts:</b>
              <br />
              Phone: +447721342281
              <br />
              Email: bobSmith1960@hotmail.com
              <br />
              Email: bobSmith1960@hotmail.com
            </div>
          </div>
          <div className="col-6 p-2-m">
            <address>
              <b style={{fontWeight: "bold"}}>Address:</b>
              <br />
              249 Wilbraham Rd, <br />
              Manchetser, Lancashire
              <br />
              M14 7EW
            </address>
          </div>
        </section>
        
        <section className="container-nav bg-dark vertical-center">
          <div className="col-4 flex-center">
            <p className=""> © 2021 APTS Aviation Company</p>
          </div>
          <div className="col-4 flex-center gap-5">
            <a
              href="#!"
              className="icon-fb"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#!"
              className="icon-linkden"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#!"
              className="icon-whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#!" className="icon-email">
              <i className="fas fa-envelope-square"></i>
            </a>
          </div>
          <div className="col-4 flex-center">
            <p className="">Powered by high tech limited</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
