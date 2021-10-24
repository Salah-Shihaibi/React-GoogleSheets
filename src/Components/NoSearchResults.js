const NoSearchResults = ({setNoResult}) => {
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
            onClick={()=>{setNoResult(false)}}
          >
           Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default NoSearchResults;
