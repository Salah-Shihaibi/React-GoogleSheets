import Navbar from "../Components/Navbar";
import Cells from "../Components/Cells";
import Cols3Images from "../Components/Cols3Images";
import Footer from "../Components/Footer";
import LoadingPage from "../Components/LoadingPage";
import globalFunctions from "../Javascript.js/global";

import { useState, useEffect } from "react";

const Home = () => {
  // /* GET home page. */
  const [contacts, setContacts] = useState([]);
  const [services, setServices] = useState([]);
  const [customers, setCustomers] = useState([]);
  //const [products, setProducts] = useState([]);
  const [general, setGeneral] = useState([]);
  const [intro, setIntro] = useState([]);
  const [offering, setOffering] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [service, setService] = useState([]);
  useEffect(() => {
    const initialisePageContent = async () => {
      setContacts((await globalFunctions.getSheet("contacts")));
      setServices((await globalFunctions.getSheet("services")));
      setCustomers((await globalFunctions.getSheet("customers")));
      setGeneral((await globalFunctions.getSheet("general")));
      //setProducts((await getSheet("products")).data);
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
        <div className="px-5 center-text">
          <h1>{service[1]}</h1>
          <hr />
        </div>

        <section className="container mb-2 flex-center">
          <Cells contents={services} card={'card'} col={'col-4'} shadow={'shadow'}/>
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
          <Cols3Images contents={customers}/>
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
