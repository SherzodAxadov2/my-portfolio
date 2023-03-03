import React from "react";
import { useParams } from "react-router-dom";
import admin from "../../assets/icons/blog-admin.png";
import blogPrice from "../../assets/icons/blog-price.png";
import link from "../../assets/icons/blog-link.png";
import eye from "../../assets/icons/u_eye.png";
import schedule from "../../assets/icons/u_calendar-alt.png";

const OneBlog = (props) => {
  const { blog } = props;
  const params = useParams();
  console.log(params.id);

  return (
    <div className="oneblog">
      <h1 className="oneblog-title">{blog.title}</h1>
      <img src={blog.img} alt="" />
      <div className="oneblog-text">{blog.text}</div>
      <button className="read-more">
        <a href={`/blog/${blog.id}`} blog={blog}>
          READ MORE
        </a>
      </button>
      <div className="oneblog-bottom">
        <div className="oneblog-bottom-left">
          <div className="active">
            <img src={admin} alt="img" />
            admin
          </div>
          <div>
            <img src={blogPrice} alt="img" />
            js, php, html
          </div>
          <div>
            <img src={link} alt="img" />
            permalink
          </div>
        </div>

        <div className="oneblog-bottom-right oneblog-bottom-left">
          <div>
            <img src={eye} alt="img" />
            {blog.view}
          </div>
          <div>
            <img src={schedule} alt="img" />
            {blog.date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBlog;
