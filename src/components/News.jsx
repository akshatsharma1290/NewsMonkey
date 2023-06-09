import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ pageSize, country, category, setProgress, apiKey }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isIntialRender, setIsIntialRender] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setProgress(0);
      let api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
      setLoading(true);
      let response = await fetch(api);
      setProgress(30);
      let data = await response.json();
      setProgress(50);
      setLoading(false);
      setArticles(data["articles"]);
      setProgress(100);
      setIsIntialRender(true);
      settotalResults(data["totalResults"]);
      document.title = `News Monkey - ${
        category[0].toUpperCase() + category.slice(1)
      }`;
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    const fetchMoreData = async () => {
      let api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${
        page + 1
      }&pageSize=${pageSize}`;
      let response = await fetch(api);
      let data = await response.json();
      setArticles(articles.concat(data["articles"]));
      settotalResults(data["totalResults"]);
      document.title = `News Monkey - ${
        category[0].toUpperCase() + category.slice(1)
      }`;
    };
    if (isIntialRender) {
      fetchMoreData();
    }
  }, [page]);

  const handleNextLoad = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="container">
        <h2
          className="text-center"
          style={{ marginTop: "90px", marginBottom: "30px" }}
        >
          News Monkey - Top {category[0].toUpperCase() + category.slice(1)}{" "}
          Headlines.
        </h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={handleNextLoad}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          style={{ overflow: "hidden" }}
        >
          <div className="row">
            {!loading &&
              articles.map((elem) => {
                return (
                  <div className="col-md-4" key={elem.publishedAt}>
                    <NewsItem
                      title={elem.title}
                      description={elem.description}
                      imgUrl={elem.urlToImage}
                      newsUrl={elem.url}
                      author={elem.author}
                      date={elem.publishedAt}
                      source={elem.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default News;
