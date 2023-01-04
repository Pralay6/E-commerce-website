import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";


import BlogPost from "../../wrappers/blog/BlogPost";

const BlogDetailsStandard = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Blog Post"
        description="Blog Post of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Blog Post", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="blog-details-wrapper ml-20">
                  {/* blog post */}
                  <BlogPost />

                  {/* blog post comment */}
                 
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogDetailsStandard;
