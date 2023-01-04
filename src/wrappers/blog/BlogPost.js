import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/1.jpg"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>23 DEC, 2022</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>Best Sports Product Available</h3>
          <p>
          Welcome to our shop, where you'll find everything you need to get your game on! We have a wide selection of sports products and sports wear for all types of athletes, from beginners to pros. Our top-quality gear is designed to help you perform at your best, while also keeping you comfortable and safe. We carry products from all the top brands, so you can trust that you're getting the best of the best. Whether you're a runner, a yogi, a basketball player, or just someone who loves to stay active, we have something for you. So come on in and check out our selection today!{" "}
          </p>
         
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/2.png"
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/3.png"
                }
              />
            </div>
          </div>
        </div>
        
      </div>
      <div className="tag-share">
        
        <div className="blog-share">
          <span>share :</span>
          <div className="share-social">
            <ul>
              <li>
                <a className="facebook" href="//facebook.com">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="//twitter.com">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="instagram" href="//instagram.com">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </Fragment>
  );
};

export default BlogPost;
