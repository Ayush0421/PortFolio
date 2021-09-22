import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2 data-text">
                Hi ! I am Ayush <br /> a Web Developer.
              </h1>
              <p className="main-hero-para">
                A Computer Science Undergrad. Profound Interest in Web technologies.
                I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards.
                Always looking for an opportunity to do better.
              </p>
             
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/final.jpg"
                alt="heroimg"
                className="img-fluid img-header"
              />
          
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
