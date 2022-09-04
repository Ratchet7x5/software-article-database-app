/**
 * This page is where all the data from MongoDB will be loaded into a table and displayed.
 */

import React, { useEffect, useState } from "react";
import { getAllArticles } from "../services/articleservice";

const ViewAllArticles = () => {
  const [data, getData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getAllArticles().then((response) => {
      console.log(response);
      getData(response.data);
    });
  };

  return (
    <>
      <h2>Articles in database:</h2>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Authors</th>
          <th>Source</th>
          <th>Published Year</th>
          <th>DOI</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>
            <td>{item.authors}</td>
            <td>{item.source}</td>
            <td>{item.pubyear}</td>
            <td>{item.doi}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default ViewAllArticles;
