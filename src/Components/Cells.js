import Cell from "./Cell";
const Cells = ({contents,card,col,shadow,button,textLength,setElement,setScrollPos}) => {
    return (
        contents.map((content, index) => (
            <Cell
              key={index}
              id={index}
              content={content}
              card={card}
              col={col}
              shadow={shadow}
              button={button}
              textLength={textLength}
              setElement={setElement}
              setScrollPos={setScrollPos}
            />
          )
    ));
}

export default Cells
