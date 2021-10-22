const Cell = ({ content, card, col, shadow, button }) => {
  return (
    <>
      <div className={`${col} zoom ${card} ${shadow} ${content[3]}`}>
        {content[2] && <img src={content[2]} alt="" width="100%" height="" />}
        <h3 className='mb-5 px-2'>{content[0]}</h3>
        <summary className="px-2">{content[1]}</summary>
        {button && <button className="button-light mt-10">{button}</button>}
      </div>
    </>
  );
};

export default Cell;
