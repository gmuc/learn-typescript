import axios, {ResponseType} from "axios";

const url = "https://swapi.dev/api/people/4";

const fetchData = async (
  url: string,
  dataManager: Function,
  resType: ResponseType,
  encoding = "utf8"
) => {
  await axios
    .request({
      method: "GET",
      url: url,
      responseType: resType,
      //			responseType: "arraybuffer",
      responseEncoding: "binary",
    })
    .then(async (response) => {
      // or latin1, utf8
      let data = response.data.toString(encoding);
      dataManager(data, response);
    })
    .catch((error) => {
      if (error.code == "ECONNREFUSED") {
        dataManager(`Error: ECONNREFUSED URL: ${error.config.url}`);
      } else {
        console.log(error);
      }
    });
};

const swapiShowData = (data: string) => {
  console.log("swapi:", data);
};

let rmode: ResponseType = "arraybuffer";
fetchData(url, swapiShowData, rmode);
