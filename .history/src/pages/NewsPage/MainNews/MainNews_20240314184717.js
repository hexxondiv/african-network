import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { News } from "../../../components/News/News";
import { latestNews } from "../../../TextData";
// import "../../research-group.scss";
export const MainNews = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(0);
  const location = useLocation();
  const { blog_id } = useParams();
  useEffect(() => {
    setId(blog_id);
    console.log(blog_id);
  }, [blog_id]);

  useEffect(() => {
    if (id !== 0)
      setData(
        latestNews.find((obj) => {
          return obj.id == id;
        })
      );
    // console.log(data, research, id);
  }, [id]);
  const [state, setState] = useState({
    query: "",
    list: latestNews.filter((newsItem) => {
      return newsItem.id > 4;
    }),
  });

  return (
    <>
      {/* <div className="col-md-12 news-container">
        <Link to={"/news-page"} className="offset-md-1 blog-link2">
          <i class="icofont-arrow-left"></i>Back
        </Link>
        <center>
          <h1 className="mt8">NEWS DETAILS</h1>
        </center>
      </div>{" "} */}
      <section className="col-md-12 flexy page-background ">
        <div className="col-md-12 page-shadow header-wrapper">
          <div className="col-md-12 banner zoominheader"> </div>
          <div className=" col-md-12 after"></div>
          <div className="icon ">
            <h1>
              <h1>NEWS DETAILS</h1>
            </h1>
          </div>
        </div>
      </section>
      {data ? (
        <>
          <div className="col-md-10 offset-md-2 flexy mtt">
            <div className="col-md-8 ">
              {" "}
              <div
                className=" main-img2 "
                style={{ backgroundImage: `url(${data.img})` }}
              ></div>
              <div className="  news-body">
                <h4>{data.newsHeading}</h4>
                <p>{data.newsDetails}</p>
                <p>{data.moreDetails}</p>
                <div className="flexy mt">
                  <ul
                    className="list-unstyled list-inline"
                    style={{ color: "grey", flexGrow: 1 }}
                  >
                    <li className="list-inline-item">
                      <strong>Tag:</strong>
                    </li>
                    <li className="list-inline-item">{data.tag1},</li>
                    <li className="list-inline-item">{data.tag2},</li>
                    <li className="list-inline-item">{data.tag3},</li>
                    <li className="list-inline-item">{data.tag4},</li>
                  </ul>
                  <ul className="list-unstyled list-inline share">
                    <li className="list-inline-item">
                      <strong>Share</strong>
                    </li>
                    <li className="list-inline-item">
                      <i class="icofont-facebook"></i>
                    </li>
                    <li className="list-inline-item">
                      <i class="icofont-twitter"></i>
                    </li>
                    <li className="list-inline-item">
                      <i class="icofont-instagram"></i>
                    </li>
                    <li className="list-inline-item">
                      <i class="icofont-linkedin"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-2 offset-md-1 mobile-padding">
              <h3>Older News</h3>
              <div className="row row-cols-1 row-cols-lg-1">
                {state.list.map((data, index) => (
                  <News data={data} key={data.id} />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
