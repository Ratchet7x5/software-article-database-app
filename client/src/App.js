import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import "./index.css"

import Home from "./pages/Home";
import ViewAllArticles from "./pages/ViewAllArticles";
import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";

const App = () => {
  return (
    <Router >
      <div>
        <h1>Software Article Database Application (SADA)</h1>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ViewAllArticles">View All Articles</NavLink>
          </li>
          <li>
            <NavLink to="/SubmitArticle">Submit an Article</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/ViewAllArticles" element={<ViewAllArticles />} />
            <Route path="/SubmitArticle" element={<SubmitArticle />} />
            <Route exact path="/404" element={<NotFoundPage />} />
            <Route path="/*" element={<Navigate to="/404" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;