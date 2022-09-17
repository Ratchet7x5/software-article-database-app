/**
 * This page is where all the data from MongoDB will be loaded into a table and displayed.
 */

import React, { useEffect, useState } from "react";
import ArticleTableDisplay from "../components/ArticleTable";
import { getAllArticles } from "../services/articleservice";
import TableStyle from "../components/TableStyle";

const ViewAllArticles = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getAllArticles().then((response) => {
      console.log(response.data);
      setArticleData(response.data);
    });
  };

  return (
    <>
      <h2>Articles in database:</h2>
      <TableStyle>
        <ArticleTableDisplay array={articleData} />
      </TableStyle>
    </>
  );
};

export default ViewAllArticles;
