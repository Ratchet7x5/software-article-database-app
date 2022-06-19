import articles from "../dummydata/articles";
import TableStyles from "../components/TableStyle";
import Table from "../components/EvidenceTable";
import TableColumns from "../components/TableColumns";
import Dropdown from "../components/Dropdown";
import { getAllArticles } from "../services/articleservice";
import { useState } from "react";
import { useEffect } from "react";

const ViewArticles = () => {
  const [data, getData] = useState([])
  const URL = '/api/articles';

  useEffect(() => {
      fetchData()
  }, [])


  const fetchData = () => {
      fetch(URL)
          .then((res) =>
              res.json())

          .then((response) => {
              console.log(response);
              getData(response);
          })

  }

  return (
      <>
        <h2>The database contains the following articles:</h2>
        <tbody>
          <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Source</th>
              <th>Published Year</th>
              <th>DOI</th>
              <th>Claim</th>
              <th>Evidence</th>
              <th>SE Practice</th>
          </tr>
            {data.map((item, i) => (
                <tr key={i}>
                    <td>{item.title}</td>
                    <td>{item.authors}</td>
                    <td>{item.source}</td>
                    <td>{item.pubyear}</td>
                    <td>{item.doi}</td>
                    <td>{item.claim}</td>
                    <td>{item.evidence}</td>
                    <td>{item.sepractice}</td>
                </tr>
            ))}
          </tbody>
      </>
  );
};

export default ViewArticles;