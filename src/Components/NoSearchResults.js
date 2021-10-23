const NoSearchResults = ({setSearch,items}) => {
  const showAll = () => {
    setSearch(items)
  }
  return (
    <>
      <div className="px-5 mb-5">
        <p>
          <h4>No Results (Try a different keyword)</h4>
          <br />
          Get in touch we may have what you're looking for.
        </p>
        <div className="">
          <button
            onClick={() => {
              window.location.href = "/#/contact";
            }}
            className="button btn-o-green mr-2 "
          >
            Contact Us
          </button>
          <button
            className="button btn-o-red"
            onClick={showAll}
          >
           Show All
          </button>
        </div>
      </div>
    </>
  );
};

export default NoSearchResults;
