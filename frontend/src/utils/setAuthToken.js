import axios from "axios";

// Set base URL for production (proxy will override this in development)
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://backend-devconnector.onrender.com";
axios.defaults.baseURL = API_BASE_URL;

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
