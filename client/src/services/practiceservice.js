import axios from "axios";

const getAllPractices = async () => {
  return axios.get("/api/practices").then((practices) => practices.data);
};

export { getAllPractices };