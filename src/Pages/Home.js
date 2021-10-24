import Navbar from "../Components/Navbar";
import Cells from "../Components/Cells";
import Cols3Images from "../Components/Cols3Images";
import Footer from "../Components/Footer";
import LoadingPage from "../Components/LoadingPage";
import globalFunctions from "../Javascript.js/global";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // /* GET home page. */
  const [contacts, setContacts] = useState([]);
  const [services, setServices] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [general, setGeneral] = useState([]);
  const [intro, setIntro] = useState([]);
  const [offering, setOffering] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [service, setService] = useState([]);
  useEffect(() => {
    const initialisePageContent = async () => {
      setContacts(await globalFunctions.getSheet("contacts"));
      setServices(await globalFunctions.getSheet("services"));
      setCustomers(await globalFunctions.getSheet("customers"));
      setGeneral(await globalFunctions.getSheet("general"));
    };
    initialisePageContent();
  }, []);

  useEffect(() => {
    if (general.length) {
      setIntro(globalFunctions.findRow(general, "intro"));
      setOffering(globalFunctions.findRow(general, "offering"));
      setService(globalFunctions.findRow(general, "services"));
      setCustomer(globalFunctions.findRow(general, "customers"));
    }
  }, [general]);

  if (general.length) {
    return (
      <>
        <title>APTS HOME</title>
        <Navbar />
        <div className='mobile mb-2'></div>
        <div className="pc" style={{ position: "relative" }}>
          <img className="intro-image pc" src={intro[4]} alt="Lights" />
          <div className="mt-3 on-image">
            <h2>
              <b>{intro[1]}</b>
            </h2>
            <p className="">
              <i>{intro[3]}</i>
            </p>
            <p>{intro[2]}</p>
            <Link to='/about'><button className="button btn-sky">Read More</button></Link>
          </div>
        </div>

        <div class="mobile p-2 bg-sky">
          <img class="intro-image" src={intro[4]} alt="Lights" />
          <div class="center-text">
            <hr />
            <h2 class=" mt-3 ">{intro[1]}</h2>
            <p class="text-info">
              <i>{intro[3]}</i>
            </p>
            <p class="">{intro[2]}</p>
            <Link to='/about'><button class="button btn-sky">
              Read More</button></Link>
          </div>
        </div>

        <div className="px-5 center-text">
          <h1>{service[1]}</h1>
          <hr />
        </div>
        <section className="container mb-2 flex-center">
          <Cells
            contents={services}
            card={"card"}
            col={"col-4"}
            shadow={"shadow"}
          />
        </section>

        <section className="center-text px-5 bg-grey py-2 mx-10 mb-5 card">
          <h3>{offering[1]}</h3>
          <hr />
          <p> {offering[2]} </p>
        </section>

        <div className="px-5 center-text">
          <h1>{customer[1]}</h1>
          <hr />
        </div>

        <section className="container mb-2 flex-center">
          <Cols3Images contents={customers} />
        </section>

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <LoadingPage />
      </>
    );
  }
};

export default Home;
