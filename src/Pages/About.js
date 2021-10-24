import Navbar from "../Components/Navbar";
import HeaderTitle from "../Components/HeaderTitle";
import Footer from "../Components/Footer";
import LoadingPage from "../Components/LoadingPage";
import globalFunctions from "../Javascript.js/global";

import { useState, useEffect } from "react";

const About = () => {
  const [about, setAbout] = useState(["loading"]);

  useEffect(() => {
    const initialisePageContent = async () => {
      const arr = await globalFunctions.getSheet("about");
      setAbout(arr);
    };
    initialisePageContent();
  }, []);

  if (about[0] === "loading") {
    return (
      <>
        <LoadingPage />
      </>
    );
  } else {
    return (
      <>
        <title>APTS News</title>
        <Navbar />
        <HeaderTitle title={"Who We Are"} />

        <main>
          <div class="container vertical-center">
            <div class="col-8">
              <p>
                <h2>{about[1][0]}</h2>
                <hr />
                {about[1][1]}
              </p>
            </div>
            <div class="col-4 pc">
              <img class="" src={about[1][2]} alt="Alps" width="100%" />
            </div>
          </div>

          <div class="container vertical-center">
            <div class="col-4 pc">
              <img class="" src={about[0][2]} alt="Alps" width="100%" />
            </div>
            <div class="col-8">
              <p>
                <h2>{about[0][0]}</h2>
                <hr />
                {about[0][1]}
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
};

export default About;
