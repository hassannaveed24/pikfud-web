import React from "react";
import recycle from "../../assets/Business/recycle.png";
import support from "../../assets/Business/support.png";
import coin from "../../assets/Business/coin.png";
import business1 from "../../assets/Business/business1.png";
import business2 from "../../assets/Business/business2.png";
import business3 from "../../assets/Business/business3.png";

const Business = () => {
  return (
    <>
      <div className="Header">
        <div className="Header__features">
          <h1 className="Header__features-title">
            Selling surplus food just got easy
          </h1>
          <div className="Header__features-container">
            <div className="Header__feature-container">
              <img src={recycle} />
              <h2>Cut your waste</h2>
            </div>
            <div className="Header__feature-container">
              <img src={support} />
              <h2>Attract new customers</h2>
            </div>
            <div className="Header__feature-container">
              <img src={coin} />
              <h2>Win back sunk costs</h2>
            </div>
          </div>
        </div>

        <div className="Header__contact">
          <h2>Become Partner</h2>
          <form className="Header__contact-form">
            <div className="Header__form-field">
              <label for="fname">Name of Business</label>
              <input type="text" id="fname" name="fname" />
            </div>

            <div className="Header__form-field">
              <label for="lname">Phone Number</label>
              <input type="text" id="lname" name="lname" />
            </div>

            <div className="Header__form-field">
              <label for="lname">Email address</label>
              <input type="text" id="lname" name="lname" />
            </div>
            <button type="submit">NEXT</button>
          </form>
        </div>
      </div>
      <div className="Process">
        <h1 className="Process__title">How it works?</h1>
        <div className="Process__steps">
          <div className="Process__step">
            <div className="Process__counter-1">1</div>

            <div className="Process__step-content">
              <h1 className="Process__step-content__title">
                Once you’ve signed up, you directly show in the app - let’s
                style your profile!
              </h1>
              <h2>
                1. Download the Pikfud Retailer app or sign up here.
                <br />
                <br />
                <br />
                2. Go to Sales planner and add:
                <br />- Logo
                <br /> - Profile background
                <br /> - Description
                <br />- Pick up information
              </h2>
            </div>
            <img src={business1} className="Process__image-1" />
          </div>
          <div className="Process__step">
            <div className="Process__counter-2">2</div>

            <div className="Process__step-content">
              <h1 className="Process__step-content__title">
                Once you’ve signed up, you directly show in the app - let’s
                style your profile!
              </h1>
              <h2>
                1. Download the Pikfud Retailer app or sign up here.
                <br />
                <br />
                <br />
                2. Go to Sales planner and add:
                <br />- Logo
                <br /> - Profile background
                <br /> - Description
                <br />- Pick up information
              </h2>
            </div>
            <img src={business2} className="Process__image-2" />
          </div>
          <div className="Process__step">
            <div className="Process__counter-3">3</div>

            <div className="Process__step-content">
              <h1 className="Process__step-content__title">
                Once you’ve signed up, you directly show in the app - let’s
                style your profile!
              </h1>
              <h2>
                1. Download the Pikfud Retailer app or sign up here.
                <br />
                <br />
                <br />
                2. Go to Sales planner and add:
                <br />- Logo
                <br /> - Profile background
                <br /> - Description
                <br />- Pick up information
              </h2>
            </div>
            <img src={business3} className="Process__image-3" />
          </div>
          {/* <div className="Process__step">
            <div className="Process__step-content">
              <h1>Once you've signed up...</h1>
              <ol>
                <li>Download the Pikfud...</li>
                <li>
                  <ul>
                    <li>Logo</li>
                    <li>Profile background</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="image" />
          </div> */}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Business;
