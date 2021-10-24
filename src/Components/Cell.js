const Cell = ({
  content,
  card,
  col,
  shadow,
  button,
  textLength,
  setElement,
  id,
  setScrollPos,
}) => {
  let summary = content[1];
  if (summary.length > textLength)
    summary = `${content[1].toString().slice(0, textLength)}...`;

  const fullView = () => {
    if (setElement) {
      setScrollPos(window.scrollY);
      setElement(content);
    }
  };

  return (
    <>
      <div
        className={`${col} zoom ${card} ${shadow} ${content[3]} mb-2`}
        onClick={fullView}
      >
        {content[2] && <img src={content[2]} alt="" width="100%" height="" />}
        <h3 className="mb-5">{content[0]}</h3>
        <summary className="">{summary}</summary>
        {button && <button className="button mt-10">{button}</button>}
      </div>
    </>
  );
};

export default Cell;
