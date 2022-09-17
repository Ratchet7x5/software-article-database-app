import React from "react";

function ArticleTableDisplay({array}) {
  console.log(array);
  let DisplayData = array.map((articles) => {
    return (
      <tr>
        <td>{articles.title}</td>
        <td>{articles.authors}</td>
        <td>{articles.source}</td>
        <td>{articles.pubyear}</td>
        <td>{articles.doi}</td>
      </tr>
    );
  });

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Source</th>
            <th>Published Year</th>
            <th>DOI</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default ArticleTableDisplay;
