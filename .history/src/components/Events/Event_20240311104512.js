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
    <div className="events-bg col">
      {" "}
      <Link
        to={"/main-events/" + data.id}
        state={{ blog_id: blogId }}
        className="events-component col-md-6 "
      >
        <div className="col-md-12 col-12 events-img">
          <img src={data.eventBanner} width="100%" />
        </div>
      </Link>
    </div>
  );
};
