import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  let pageSize = 6;
  let country = "in";
  const apiKey = import.meta.env.VITE_NEWS_API;

  const newsProps = { setProgress, apiKey, pageSize, country };

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const newsRoutes = categories.map((category) => {
    return (
      <Route
        key={category}
        exact
        path={`/${category}`}
        element={<News {...newsProps} category={category} />}
      ></Route>
    );
  });

  return (
    <>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        {newsRoutes}
        <Route
          exact
          path="/"
          element={<News {...newsProps} category="general" />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
