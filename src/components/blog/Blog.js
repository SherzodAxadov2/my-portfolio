import React, { useState } from "react";
import "./blog.css";
import OneBlog from "./OneBlog";
import allBlogs from "./BlogData";
import { Link } from "react-router-dom";
import home from "../../assets/icons/u_home-alt.png";
import { BiSearch } from "react-icons/bi";
import blogPost from "../../assets/icons/blog-post.png";
import schedule from "../../assets/icons/u_calendar-alt.png";
import clock from "../../assets/icons/u_clock-seven.png";

const Blog = () => {
  const [blogs] = useState(allBlogs);
  const [categories] = useState([
    {
      text: "JAVASCRIPT",
    },
    {
      text: "WORDPRESS",
    },
    {
      text: "COURSES",
    },
    {
      text: "CSS",
    },
    {
      text: "JQUERY",
    },
  ]);
  const [archives] = useState([
    {
      text: "JANUARY 2022",
    },
    {
      text: "DECEMBER 2022",
    },
    {
      text: "NOVEMBER 2022",
    },
    {
      text: "OCTOBER 2022",
    },
    {
      text: "SEPTEMBER 2022",
    },
  ]);
  const [tags] = useState([
    {
      text: "php",
    },
    {
      text: "javascript",
    },
    {
      text: "html",
    },
    {
      text: "xml",
    },
    {
      text: "envato",
    },
  ]);

  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-wrapper row">
          <div className=" col-md-12 col-8">
            {blogs.map((blog) => {
              return <OneBlog blog={blog} key={blog.id} />;
            })}
          </div>
          <div className="col-md-12 col-4">
            <div className="blog-btns">
              <div className="blog-btn">
                <Link to="/">
                  <img src={home} alt="img" />
                  HOME
                </Link>
              </div>
            </div>

            <div className="blog-search">
              <input type="text" placeholder="Search in my blog..." />
              <BiSearch />
            </div>

            <div className="blog-box">
              <div className="blog-box-title">RECENT POSTS</div>
              <div className="blog-posts">
                <div className="blog-post">
                  <img src={blogPost} alt="" />
                  <div className="blog-post-right">
                    <h6>
                      Why themeforest is the <br /> best
                    </h6>
                    <div className="blog-post-bottom">
                      <div>
                        <img src={clock} alt="img" />
                        18:06
                      </div>
                      <div>
                        <img src={schedule} alt="img" />
                        12.04.2022
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-post">
                  <img src={blogPost} alt="" />
                  <div className="blog-post-right">
                    <h6>
                      Why themeforest is the <br /> best
                    </h6>
                    <div className="blog-post-bottom">
                      <div>
                        <img src={clock} alt="img" />
                        18:06
                      </div>
                      <div>
                        <img src={schedule} alt="img" />
                        12.04.2022
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-post">
                  <img src={blogPost} alt="" />
                  <div className="blog-post-right">
                    <h6>
                      Why themeforest is the <br /> best
                    </h6>
                    <div className="blog-post-bottom">
                      <div>
                        <img src={clock} alt="img" />
                        18:06
                      </div>
                      <div>
                        <img src={schedule} alt="img" />
                        12.04.2022
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-box category">
              <div className="blog-box-title">CATEGORIES</div>
              <div className="blog-box-lists">
                {categories.map((category) => {
                  return <span>{category.text}</span>;
                })}
              </div>
            </div>

            <div className="blog-box category">
              <div className="blog-box-title">ARCHIVES</div>
              <div className="blog-box-lists">
                {archives.map((archive) => {
                  return <span>{archive.text}</span>;
                })}
              </div>
            </div>

            <div className="blog-box category">
              <div className="blog-box-title">POPULAR TAGS</div>
              <div className="blog-box-lists">
                {tags.map((tag) => {
                  return <span>{tag.text}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
