import { useState } from "react";

const Search = ({ setSearch, items, setNoResult, setNum}) => {
  const [find, setFind] = useState("");

  const searchPage = () => {
      const searching = new RegExp(find,"i");
      const found = items.filter(
        (cell) => searching.test(cell[0].toString()) || searching.test(cell[1].toString())
      )
      if(found.length > 0){
         setSearch(found);
         setNoResult(false);
         setNum(0);
      } else {
        setNoResult(true);
      }  
  };

  const searchContent = (e) => {
    e.preventDefault();
    searchPage();
  };

  return (
    <>
      <form className="col-12 flex-center ver-center" onSubmit={searchContent}>
        <input
          id="search"
          name="search"
          className="search"
          placeholder="search"
          value={find}
          onChange={(inInput) => setFind(inInput.target.value)}
        />
        <button type="submit" className="search-button">
          <i className="fas fa-search fa-lg" aria-hidden="true"></i>
        </button>
      </form>
    </>
  );
};

export default Search;
