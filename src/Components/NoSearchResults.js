import { useHistory } from "react-router-dom";
const NoSearchResults = ({setSearch,items,finds}) => {
  const history = useHistory(); //() => {history.go(0);}
  const searchPage = () => {
    if(finds.slice(-2)==='goBack') history.go(0);
    const searching = new RegExp(finds.slice(-2,-1), "i");
    setSearch(
      items.filter(
        (cell) =>
          searching.test(cell[0].toString()) ||
          searching.test(cell[1].toString())
      )
    );
  };
  return (
    <>
      <div className="p-5">
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
            onClick={searchPage}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default NoSearchResults;
