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
      <div className="col-md-12 col-12 news-img">
        <img srcnews-img={data.eventBanner} width="100%" />
      </div>
    </div>
  );
};
