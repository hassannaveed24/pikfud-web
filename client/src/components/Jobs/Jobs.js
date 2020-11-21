import React, { useRef } from "react";
import georgia from "../../assets/Jobs/georgia.svg";
import Rectangle30 from "../../assets/Jobs/Rectangle30.png";
import { FaCaretDown } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Jobs = () => {
  const history = useHistory();
  const routeChange = () => {
    let path = "/jobpost";
    history.push(path);
    window.scroll(0, 0);
  };

  const openingRef = useRef(null);
  const executeScrolltoOpening = () => {
    openingRef.current.scrollIntoView();
  };
  const ourRef = useRef(null);
  const scrolltoOur = () => {
    ourRef.current.scrollIntoView();
  };
  return (
    <>
      <div className="Jobs ">
        <div className="Jobs__header">
          <h1>
            Help us become the first zero food waste generation. Come work at
            Pikfud!
          </h1>
          <div className=" Jobs__header_button_caret ">
            <button
              className="Jobs__header__button"
              onClick={executeScrolltoOpening}
            >
              VIEW OPEN POSITIONS
            </button>
            <FaCaretDown
              color="white"
              className="mt-3 caret"
              onClick={scrolltoOur}
            />
          </div>
        </div>
        <div className="Jobs__content" ref={ourRef}>
          <h1>Who are we and who are you?</h1>
          <h2>
            Here at Pikfud we're a diverse bunch but what brings us all together
            is a passion for fighting food waste and protecting the planet.
            <br />
            <br />
            First and foremost, to work at Pikfud you need to believe in doing
            the right thing, always. That combined with a resourceful attitude,
            a creative spark and a strong desire to keep learning and growing is
            what we look for in the perfect waste warrior. Sound like you?
            <br />
            <br />
            First and foremost, to work at Pikfud you need to believe in doing
            the right thing, always. That combined with a resourceful attitude,
            a creative spark and a strong desire to keep learning and growing is
            what we look for in the perfect waste warrior. Sound like you?
          </h2>
        </div>
        <div className="Culture ">
          <div className="Culture__content ">
            <h1>Our Culture</h1>
            <h2>
              We love to accomplish goals together, celebrate our victories and
              support one another.
            </h2>
          </div>
          <img src={Rectangle30} />
        </div>
        <div className="JobsOpening" ref={openingRef}>
          <h1>Current Job Openings</h1>
          <Table hover>
            <tbody>
              <tr onClick={routeChange}>
                <td>Senior Product Designer</td>
                <td>Design </td>
                <td>
                  .
                  <img src={georgia} />
                  Tbilisi, Georgia
                </td>
              </tr>
              <tr>
                <td>Fullstack Developer </td>
                <td>Development </td>
                <td>
                  .
                  <img src={georgia} />
                  Tbilisi, Georgia
                </td>
              </tr>
              <tr>
                <td>Head of Sales</td>
                <td>Sales </td>
                <td>
                  .
                  <img src={georgia} />
                  Tbilisi, Georgia
                </td>
              </tr>
              <tr>
                <td>Head of Marketing</td>
                <td>Marketing</td>
                <td>
                  .
                  <img src={georgia} />
                  Tbilisi, Georgia
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Jobs;
