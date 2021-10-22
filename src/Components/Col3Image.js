const Col3Image = ({content}) => {
  return (
    <>
      <div className={`col-3 zoom ${content[1]}`}>
        <img src={content[0]} alt="" width="100%" height="145px" />
      </div>
    </>
  );
};

export default Col3Image;
