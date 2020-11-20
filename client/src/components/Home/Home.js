import React from "react";

import homePic from "../../assets/Home/homePic.png";
import appDownload from "../../assets/Home/appDownload.png";
import rescueFood from "../../assets/Home/rescueFood.png";
import pickIt from "../../assets/Home/pickIt.png";
import wastage from "../../assets/Home/wastage.png";
import partnerStores from "../../assets/Home/partnerStores.png";
import callToActionBackground from "../../assets/Home/pizza.jpg";
import pizza from "../../assets/Home/pizza.jpg";

const Home = () => {
  return (
    <>
      <div className="HomeScreen1">
        <div>
          <img className="HomeScreen1-homePic" src={homePic} />
        </div>
        <div>
          <h3 className="HomeScreen1-title">IT'S SIMPLE</h3>
        </div>
        <div className="HomeScreen1Content">
          <div className="">
            <img className=" HomeScreen1NavImg" src={appDownload} />
            <h4 className="HomeScreen1-nav">Download the app</h4>
          </div>
          <div className="">
            <img className=" HomeScreen1NavImg" src={rescueFood} />
            <h4 className="HomeScreen1-nav">Rescue food for half price</h4>
          </div>
          <div className="">
            <img className=" HomeScreen1NavImg" src={pickIt} />
            <h4 className="HomeScreen1-nav">
              Pick it up as take away and enjoy
            </h4>
          </div>
        </div>
      </div>
      {/* HomeScreen2 */}
      <div className="HomeScreen2">
        <h1 className="HomeScreen2H4">
          We’re throwing away more food than the planet can handle.
        </h1>
        <h2 className="HomeScreen2Body">
          But that’s not the only problem. It takes a lot of land, energy and
          water to make our food. By wasting that food, we also waste the
          resources that went into producing it, putting needless strain on our
          earth.
          <br />
          <br />
          But that’s not the only problem. It takes a lot of land, energy and
          water to make our food. By wasting that food, we also waste the
          resources that went into producing it, putting needless strain on our
          earth.
        </h2>
      </div>
      <div>
        <div className="flex-container HomeScreen2Wastage">
          <div>
            <img src={wastage} className="HomeScreen2WastageImg" />
          </div>
          <div className="HomeScreenWastage2Body">
            <h2 className="HomeScreen2WastageH2">
              One third of all food is wasted.
            </h2>
            <h1 className="HomeScreen2WastageH1">We’re changing that.</h1>
          </div>
        </div>
      </div>

      <div className="flex-container HomeScreen2Partners" style={{}}>
        <h1 className="HomeScreen2PartnersH1">MEET OUR PARTNER STORES</h1>

        <div className="partnersImgMain">
          <div className="partnersImgRow1">
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
          </div>
        </div>

        {/* <img className="w-100" src={backgroundImg} style={{ height: "auto" }} /> */}
      </div>

      <div className="Home__callToAction">
        <div className="CallToAction__element" />
        <img className="CallToAction__element_Img" src={pizza} />
        <div className="content-container ">
          <div className="CallToAction__content Main__CallToAction__content">
            <h1>
              Join the first zero food
              <br />
              waste generation
            </h1>
            <div className="CallToAction__buttons-container">
              <button type="button" className="CallToAction__button">
                Business
              </button>
              <button type="button" className="CallToAction__button">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
