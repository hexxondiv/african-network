import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./events.scss";
export const Events = ({ data }) => {
  const [blogId, setBlogId] = useState(0);

  useEffect(() => {
    setBlogId(data.id);
  },[data.id]);

  return (
    <Link
      to={"/main-events/" + data.id}
      state={{ blog_id: blogId }}
      className="events-component col-md-6 "
    >
      <div className="col-md-12 col-12 events-img">
        <img src={data.eventBanner} width="100%" alt=""/>
      </div>
    </Link>
  );
};
