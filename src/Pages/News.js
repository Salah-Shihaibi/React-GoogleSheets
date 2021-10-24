import Navbar from "../Components/Navbar";
import HeaderTitle from "../Components/HeaderTitle";
import Footer from "../Components/Footer";
import LoadingPage from "../Components/LoadingPage";
import Cells from "../Components/Cells";
import Search from "../Components/Search";
import NoSearchResults from "../Components/NoSearchResults";
import FullViews from "../Components/FullView";
import globalFunctions from "../Javascript.js/global";
import Pagination from "../Components/Pagination";

import { useState, useEffect } from "react";

const News = () => {
  /* GET News page. */
  const [news, setNews] = useState(["loading"]);
  const [items, setItems] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [element, setElement] = useState([]);
  const [scrollPos, setScrollPos] = useState(0);
  const [num, setNum] = useState(0);
  const perPage = 4;

  useEffect(() => {
    const initialisePageContent = async () => {
      const arr = await globalFunctions.getSheet("news");
      setNews(arr);
      setItems(arr);
    };
    initialisePageContent();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, scrollPos);
    }, 500);
  }, [element, scrollPos]);

  if (news[0] === "loading") {
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
        {element.length === 0 ? (
          <>
            <HeaderTitle title={"What We Offer"} />
            <Search
              setSearch={setNews}
              items={items}
              setNoResult={setNoResult}
              setNum={setNum}
            />
            {noResult && <NoSearchResults setNoResult={setNoResult} />}
            {!noResult && (
              <>
                <section className="container mb-2 flex-center">
                  <Cells
                    contents={news.slice(num * perPage, (num + 1) * perPage)}
                    col={"col-6"}
                    button={"Read More"}
                    textLength={40}
                    setElement={setElement}
                    setScrollPos={setScrollPos}
                  />
                </section>
                <Pagination paginationNum={Math.ceil(news.length / perPage)}
                 num={num} setNum={setNum}/>
              </>
            )}
          </>
        ) : (
          <>
            <HeaderTitle title={"Contact Us To Know More"} />
            <FullViews element={element} setElement={setElement} />
          </>
        )}
        <Footer />
      </>
    );
  }
};

export default News
