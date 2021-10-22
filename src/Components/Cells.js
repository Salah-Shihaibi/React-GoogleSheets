import Cell from "./Cell";
const Cells = ({contents,card,col,shadow,button}) => {
    return (
        contents.map((content, index) => (
            <Cell
              key={index}
              content={content}
              card={card}
              col={col}
              shadow={shadow}
              button={button}
            />
          )
    ));
}

export default Cells
