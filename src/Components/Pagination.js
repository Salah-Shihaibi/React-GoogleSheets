const Pagination = ({ paginationNum, num, setNum }) => {
  let beginning = num ? "null" : "disabled";
  let list = paginationNum;
  let max = window.innerWidth < 700 ? 4 : 15;

  if (list > max){
    list = max;
    /*if paginationNum (max number of pages) - max (the number on nav buttons) is < 
    num (the page user is on) then less nav buttons are needed*/ 
    // -1 is there for large lists as the last button is always displayed 
    if (num > paginationNum - max) list = paginationNum - num - 1;
  } else{
    if (num > paginationNum - max) list = paginationNum - num;
  }
  let ending = "";
  if (num == paginationNum - 1) ending = "disabled";

  let navCount = [];
  for (let i = num; i < list + num; i++) {

    navCount.push(
      <button
        class={i == num && "disabled active"}
        onClick={() => {
          setNum(i);
        }}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <>
      <nav class="py-2 mb-5">
        <div class="col-12 flex-center ver-center pagination">
          <button
            class={`${beginning}`}
            onClick={() => {
              setNum(num - 1);
            }}
          >
            <span>&laquo;</span>
          </button>

          {num > 0 && (
            <>
              <button
                onClick={() => {
                  setNum(0);
                }}
              >1</button>
            </>
          )}

          {navCount}

          {paginationNum > max && (
            <>
              <button class="">... </button>
              <button
                class={num == paginationNum-1 && "disabled active"}
                onClick={() => {
                  setNum(paginationNum - 1);
                }}
              >
                {paginationNum}
              </button>
            </>
          )}
          <button
            class={`${ending}`}
            onClick={() => {
              setNum(num + 1);
            }}
          >
            <span>&raquo;</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Pagination;
