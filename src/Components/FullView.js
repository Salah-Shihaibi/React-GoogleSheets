import { Link } from "react-router-dom";

const FullViews = ({ element, setElement }) => {
  /* GET Products page. */
  const cancel = () => {
    setElement([]);
  };
  return (
    <>
      <div className="mid p-2 card-container">
        {element[2] && (
          <img src={element[2]} alt="Alps" width="100%" className="" />
        )}
        <p>
          <h4>{element[0]}</h4>
          {element[1]}
        </p>
        <div className="flex-center gap-2">
          <Link to="/Contact" className="col-6 button flex-center ver-center">
            Contact Us
          </Link>
          <button className="col-6 button" onClick={cancel}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default FullViews;
