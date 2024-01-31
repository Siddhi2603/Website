import React from 'react';

const Blog = () => {
  return (
    <div className="card-columns">
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <img
              src="https://maxgentechnologies.com/maxgenApi/blog_image/summwr1.jpeg"
              alt="Lights"
              style={{ width: "100%" }}
            />
            <div className="caption flex">
              <p>
              <h4>Summer Internship2023</h4>
              Maxgen Technologies Pvt Ltd is seeking a highly motivated and enthusiastic individual to join Internship Programme for the summer. This internship offers an excellent opportunity to gain hands-on experience in IT Sector and contribute to real-world projects.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <img
              src="https://maxgentechnologies.com/maxgenApi/blog_image/Digital-Marketing-Services.jpg"
              alt="Nature"
              style={{ width: "100%" }}
            />
            <div className="caption">
            <h4>Why Digital Marketing is Important to Generate Revenue in Business</h4>
              <p>
                FDigital marketing has become an essential aspect of generating revenue for businesses. Here are some reasons why digital marketing is important for revenue generation:
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <img
              src="https://maxgentechnologies.com/maxgenApi/blog_image/web-design.jpg"
              alt="Fjords"
              style={{ width: "100%" }}
            />
            <div className="caption">
            <h4>Importance of Website in your Business Growth</h4>
              <p>
              Digital marketing techniques such as search engine optimization (SEO), social media marketing, and pay-per-click (PPC) advertising can help businesses reach a wider audience and increase their visibility online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
