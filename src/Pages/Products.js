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
  } else {
    return (
      <>
        <title>APTS PRODUCTS</title>
        <Navbar />
        <HeaderTitle title={"What We Offer"} />
        <Search setSearch={setProducts} items={items}/>
        <section className="container mb-2 flex-center">
          <Cells contents={products} col={"col-3"} button={"Read More"} />
        </section>
        {products.length === 0 && 
        <NoSearchResults  setSearch={setProducts} items={items}/>}
        <Footer />
      </>
    );
  }
};
export default Products;
