import React, { useState, useEffect } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { route } from "../../Routes";
import img from "assets/Header/logo.png";
import Home from "../Home";
import classnames from "classnames";

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Error from "components/Error";
const Header = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [prevScrollpos]);

  useEffect(() => {
    if (isNavVisible) {
      document.body.style.overflow = "hidden";
      document.body.scrollTop = 0;
    } else document.body.style.overflow = "scroll";
  }, [isNavVisible]);

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      const currentScrollPos = window.pageYOffset;
      const _visible = prevScrollpos >= currentScrollPos;

      setPrevScrollpos(currentScrollPos);
      setVisible(_visible);
    } else {
      setVisible(true);
    }
  };
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    window.scrollTo(0, 0);
    setVisible(true);
  };
  return (
    <div>
      <Navbar
        className={classnames("Main__header", {
          "Main__header--hidden": !visible,
        })}
      >
        <Container fluid className="px-5">
          <Navbar.Brand href="/">
            <img
              src={img}
              width="134px"
              height="64px"
              // className="d-inline-block align-top"
              // alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="justify-content-space-between d-flex Header__Nav">
            {route.map((item, index) => {
              if (item.show)
                return (
                  // <Nav.Link
                  //   onClick={() => {
                  //     document.body.scrollTop = 0;
                  //     console.log("Scroll top");
                  //   }}
                  // >
                  <Link
                    key={`header-routes-${index + 1}`}
                    to={item.path}
                    style={
                      // selected == index
                      location.pathname == item.path
                        ? { color: "#FF8298", textDecoration: "none" }
                        : { color: "black", textDecoration: "none" }
                    }
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setVisible(true);
                    }}
                    // onClick={() => setSelected(index)}
                  >
                    {item.name}
                  </Link>
                  // </Nav.Link>
                );
            })}
          </Nav>
        </Container>
      </Navbar>
      <div
        className={classnames(
          "Burger__header",
          {
            Burger__header__extended: isNavVisible,
          },
          {
            "Burger__header--hidden": !visible,
          }
        )}
      >
        <div className="d-flex align-items-center justify-content-between">
          <img className="Buger__header__logo" src={img} />
          <div>
            <div
              className={classnames("hamburger", "hamburger--elastic", {
                "is-active": isNavVisible,
              })}
              onClick={toggleNav}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>
          {/* <GiHamburgerMenu /> */}
        </div>
        {isNavVisible ? (
          <div style={{}}>
            {route.map((item, index) => {
              if (item.show)
                return (
                  <ul className="Burger__header__extended__Nav animate__animated animate__bounceInDown">
                    {/* uses animate.css library (included via cdn in public/index.html) */}
                    <li>
                      <Nav.Link>
                        <Link
                          to={item.path}
                          style={
                            // selected == index
                            location.pathname == item.path
                              ? {
                                  color: "#FF8298",
                                  textDecoration: "none",
                                }
                              : {
                                  color: "black",
                                  textDecoration: "none",
                                }
                          }
                          className={classnames(
                            "Burger__header__extended__li",
                            {
                              "Burger__header__extended__li--is-selected":
                                index == selected,
                            }
                          )}
                          onClick={() => {
                            setSelected(index);
                            toggleNav();
                          }}
                        >
                          {item.name}
                        </Link>
                      </Nav.Link>
                    </li>
                  </ul>
                );
            })}
          </div>
        ) : null}
      </div>

      <Switch>
        {route.map((item, index) => {
          return (
            <Route
              exact
              path={item.path}
              key={index}
              component={item.component}
            />
          );
        })}
        <Route exact path={"/error"} key={"error"} component={Error} />

        <Redirect to="/error" />
      </Switch>
    </div>
  );
};

export default Header;
