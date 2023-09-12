import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;

const headers = {
  Authorization: "bearer " + TMBD_TOKEN,
};

// method for fetching data
// pass two argument first url and2nd params
export const fetchDataFromApi = async (url, params) => {
  // if success
  try {
    // using axios.get to get the response in json format(benefit of axios: Json format)
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    // console.log(data)
    return data;
    // if error
  } catch (err) {
    console.log(err);
    return err;
  }
};

// after making these changes re-run the app
// now refer the api refernce TMBD page of  website