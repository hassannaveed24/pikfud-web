import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../assets/Footer/logo-en2.png";
import appleStore from "../../assets/Footer/logo-app-store-brand-font-png-favpng-Gb5FcTZcrb9bRikX49s26mMVn1.png";
import googlePlay from "../../assets/Footer/en_badge_web_generic1.png";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <Container>
          <Row>
            <Col md={6}>
              <div className="footer-logo-container">
                <img src={logo} className="footer-logo" />
              </div>
              <div className="footer-SocialIcons">
                <img src={appleStore} className="cto-button" />
                <img src={googlePlay} className="cto-button" />
              </div>
              <div className="footer-SocialIcons">
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebook className="footer-icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <FaInstagram className="footer-icon" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <FaTwitter className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <FaLinkedin className="footer-icon" />
                </a>
              </div>
              <div className="flex-column">
                <h4 className="footer-address">
                  Copyright 2020 Pikfud. All Rights Reserved.
                  <br />
                  VAT number: 404600026.
                </h4>
              </div>
            </Col>
            <Col>
              <div className="footer-Navbar">
                <h4 className="footer-Navbar-title">Sitemap</h4>
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <h4 style={{ color: "black" }}>Home</h4>
                </Link>
                <Link
                  to="/aboutus"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <h4 style={{ color: "black" }}>About Us</h4>
                </Link>
                <Link
                  to="/business"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <h4 style={{ color: "black" }}>Business</h4>
                </Link>
                <Link
                  to="/blog"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <h4 style={{ color: "black" }}>Blog</h4>
                </Link>
                <Link
                  to="/jobs"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <h4 style={{ color: "black" }}>Jobs</h4>
                </Link>
              </div>
            </Col>
            <Col>
              <div className="footer-Navbar">
                <h4 className="footer-Navbar-title">Legal</h4>
                <Link
                  to="/termsandconditions"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <h4 style={{ color: "black" }}>Terms & Conditions</h4>
                </Link>
                <Link
                  to="/privacypolicy"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <h4 style={{ color: "black" }}>Privacy Policy</h4>
                </Link>
                <Link
                  to="/cookiepolicy"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <h4 style={{ color: "black" }}>Cookie Policy</h4>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
