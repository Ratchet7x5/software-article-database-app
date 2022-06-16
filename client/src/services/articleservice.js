import axios from "axios";

//gets all articles from the MongoDB
const getAllArticles = async () => {
  return axios.get("/api/articles").then((articles) => articles.data);
};

const postArticle = async (article) => {
  //return axios.post("/api/articles", article).then((articles) => articles.data);
  return axios.post("/api/articles", article);
}

//todo(ratchet7x5): add in PUT and DELETE here for mods 
//PUT
const updateArticle = async (article) => {
  return axios.put("/api/articles", article)
}

export { getAllArticles, postArticle, updateArticle };