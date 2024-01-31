import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not already done
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="container2">
      <div className="content-container">
        <div className="first-part">
          <a className="active" href="/home" aria-current="page">
            <img
              src="data:image/png;base64,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"
              alt="Maxgen Technologies Pvt. Ltd."
            />
          </a>
        </div>
        <div className="second-part">
          <h3>Resources</h3>
          <ul>
            <li><a className="" href="/services">Services</a></li>
            <li><a className="" href="/internship">Internship</a></li>
            <li><a className="" href="/career">Career</a></li>
            <li><a className="" href="/portfolio">Portfolio</a></li>
          </ul>
        </div>
        <div className="third-part">
          <h3>Company</h3>
          <ul>
            <li><a className="" href="/about">About</a></li>
            <li><a className="" href="/contact">Contact</a></li>
            <li><a className="" href="/blogs">Blog</a></li>
          </ul>
        </div>
        <div className="fourth-part">
          <h3>Legal</h3>
          <ul>
            <li><a className="" href="/privacypolicy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="fifth-part">
          <div className="subscribe">
            <form onSubmit={handleSubmit} autoComplete="off">
              <input type="text" name="subemail" placeholder="Subscribe for email updates" value="" />
              <button type="submit" className="footer-btn">
                <div className="footer-ring" style={{ display: 'none' }}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <FontAwesomeIcon icon={faGreaterThan} style={{ display: 'block' }} />
              </button>
            </form>
            <span id="emailerr1">Please enter valid email</span>
            <p className="msg"> </p>
          </div>
          <div className="socials">
            <a href="https://www.facebook.com/maxgentechnologies" target="_blank">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.instagram.com/maxgen_technologies/" target="_blank">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href="https://www.linkedin.com/company/maxgen-technologies" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>All copyrights reserved © 2013 - Maxgen Technologies Pvt. Ltd.</p>
      </div>
      <div className="bottom-line">
        
        <div className="stp showmc" id="stpbtn">
          <button className="stpbtn">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
