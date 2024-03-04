import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./events.scss";
export const Events = ({ data }) => {
  const [blogId, setBlogId] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setBlogId(data.id);
  });

  return (
    <div className="news-component col-md-6 ">
      <div
        className="col-md-12 col-12 news-img"
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>
      <div className="col-md-12 col-12 news-details">
        <h5>{data.newsHeading}</h5>
        <div className="flexy flexyM">
          <small>{data.date}</small>
          <small>{data.view}</small>
          <small>{data.comment}</small>
        </div>
        <p>{data.newsDetails}</p>
        <Link
          className="news-link"
          to={"/main-news/" + data.id}
          state={{ blog_id: blogId }}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
