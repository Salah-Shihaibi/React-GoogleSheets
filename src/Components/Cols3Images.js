import Col3Image from "./Col3Image";
const Cols3Images = ({contents}) => {
  return contents.map((content, index) => (
    <Col3Image key={index} content={content} />
  ));
};

export default Cols3Images;
