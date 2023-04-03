import React from "react";

const NewsItem = ({
  title,
  description,
  imgUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <div className="card my-3">
      <img
        src={
          !imgUrl
            ? "https://images.hindustantimes.com/tech/img/2023/04/01/1600x900/asteroid_freepik_1679838636836_1680327147823_1680327147823.jpg"
            : imgUrl
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">
          {source}
        </span>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            Author - {!author ? "Unknown" : `${author} `} | Date -
            {new Date(date).toGMTString()}
          </small>
        </p>
        <a
          href={newsUrl}
          target="_blank"
          className="btn btn-sm btn-outline-dark"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
