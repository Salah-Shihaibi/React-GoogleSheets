import Axios from "axios";

const getSheet = async (sheet) => {
    const res = await Axios({
      method: "GET",
      url: `https://script.google.com/macros/s/AKfycbzPDOZOdEmPoaEbA4vLYALR4BYbbw7Pln_eFaFYSd2-_BI2Vunh6AvDOgK80eUvo82N/exec?sheet=${sheet}`,
    });
    const data = await res.data;
    return data.data.reverse();
  };

const findRow = (general, item) => {
    const found = general.find((name) => name[0] === item);
    if (found.length > 2) return found;
    return found[1];
  };

export default {findRow, getSheet};

