import { useState } from "react";

const Search = ({ setSearch, items}) => {
  const [find, setFind] = useState("");

  const searchPage = () => {
      const searching = new RegExp(find,"i");
      setSearch(items.filter(
        (cell) => searching.test(cell[0].toString()) || searching.test(cell[1].toString())
      ));
  };

  const searchContent = (e) => {
    e.preventDefault();
    searchPage();
  };

  return (
    <>
      <form class="" onSubmit={searchContent}>
        <input
          id="search"
          name="search"
          className=""
          style={{ background: "#fff" }}
          placeholder="search"
          value={find}
          onChange={(inInput) => setFind(inInput.target.value)}
        />
        <button type="submit" class="fabutton">
          <i className="fas fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </>
  );
};

export default Search;
