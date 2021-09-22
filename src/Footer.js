import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
                  <h2 className="footer-head">Follow Me</h2>
                     <div className="footer-div">
                     <div className="footer-section">
                      <a href="https://www.facebook.com/profile.php?id=100003150247862"><i class="fab fa-facebook-f fontawesome-style"></i></a>
                      <a href="https://www.instagram.com/ayush.0904/" target="_thapa"> <i class="fab fa-instagram fontawesome-style"></i> </a>
                      <a href="https://www.linkedin.com/in/ayush-gupta-8162421b3"> <i class="fab fa-linkedin-in fontawesome-style"></i></a>
                      <i class="fab fa-twitter fontawesome-style"></i>
                     </div>
                     </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para footer-para text-center w-100">
                  Copyright @ 2021 Ayush. All rights reserved.
                </p>
              </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
