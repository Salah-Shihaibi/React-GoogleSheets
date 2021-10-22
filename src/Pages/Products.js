import Navbar from "../Components/Navbar";
import HeaderTitle from "../Components/HeaderTitle";
import Footer from "../Components/Footer";
import LoadingPage from "../Components/LoadingPage";
import Cells from "../Components/Cells";
import Search from "../Components/Search";
import NoSearchResults from "../Components/NoSearchResults";
import globalFunctions from "../Javascript.js/global";

import { useState, useEffect } from "react";

const Products = () => {
  /* GET Products page. */
  const [products, setProducts] = useState(["loading"]);
  const [items, setItems] = useState([]);
  const [finds, setFinds] = useState(['goBack']);

  useEffect(() => {
    const initialisePageContent = async () => {
      const arr = await globalFunctions.getSheet("products");
      setProducts(arr);
      setItems(arr);
    };
    initialisePageContent();
  }, []);

  if (products[0] === "loading") {
    return (
      <>
        <LoadingPage />
      </>
    );
  } else if (products.length === 0) {
    return (
      <>
        <title>APTS PRODUCTS</title>
        <Navbar />
        <HeaderTitle title={"What We Offer"} />
        <Search setSearch={setProducts} items={items} setFinds={setFinds} finds={finds}/>
        <NoSearchResults  setSearch={setProducts} items={items} finds={finds}/>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <title>APTS PRODUCTS</title>
        <Navbar />
        <HeaderTitle title={"What We Offer"} />
        <Search setSearch={setProducts} items={items} setFinds={setFinds} finds={finds} />
        <section className="container mb-2 flex-center">
          <Cells contents={products} col={"col-3"} button={"Read More"} />
        </section>
        <Footer />
      </>
    );
  }
};
export default Products;
