import React from "react";
import aboutProblem from "../../assets/AboutUs/about-problem.png";
import aboutSolution from "../../assets/AboutUs/about-solution.png";
// import partnersImg from "../../assets/AboutUs/partnersImg.png";
import foundedImg from "../../assets/AboutUs/foundedImg.png";
import aboutBreadcrumb from "../../assets/AboutUs/about-breadcrumb2.png";

const AboutUs = () => {
  return (
    <>
      <div className="AboutUs__Main">
        <img
          src={aboutBreadcrumb}
          style={{
            height: "auto",
            width: "100vw",
            marginBottom: "10rem",
          }}
        />
        <div className="wasteProblem wasteProblem__Uppper ">
          <div>
            <img className="wasteProblemImgDiv" src={aboutProblem} />
          </div>
          <div className="wasteProblemTextDiv">
            <h1>The $1.2 trillion food waste problem</h1>
            <br />
            <body>
              One third of all food produced is thrown away annually, resulting
              in 1.3 billion tonnes of waste worldwide. It’s one of the largest
              climate and economic issues facing our planet creating a massive
              business opportunity.
              <br />
              <br />
              <br />
              In fact, if food waste was a country, it would be the 3rd biggest
              CO2 emission contributing country in the world.
            </body>
          </div>
        </div>

        <div className="wasteProblem">
          <div className="solutionTextDiv">
            <h1>The solution</h1>
            <br />
            <body>
              What if we ate the problem? What if we connect surplus food from
              retailers to consumers for a lower price? As a result, users eat
              great food for less and businesses receive an additional revenue
              stream — all while together reducing food waste.
              <br />
              <br />
              <br />
              The app, Karma, is a food rescue app that allows retailers to sell
              their surplus food to consumers at half price - instead of having
              great food go to waste.
            </body>
          </div>
          <div>
            <img className="wasteProblemImgDiv" src={aboutSolution} />
          </div>
        </div>

        <div className="founded">
          {/* <div className="foundedImgDiv"> */}
          <img className="foundedImg" src={foundedImg} />
          {/* </div> */}
          <div className="foundedTxt">
            <h1>2020</h1>
            <br />
            <br />
            <h1>Pikfud is founded</h1>
            <br />
            <br />
            <body>
              The solution came to life and Karma was founded and built, a
              Swedish startup founded in Stockholm, November 2016, by Hjalmar
              Ståhlberg Nordegren, Elsa Bernadotte, Ludvig Berling and Mattis
              Larsson.
            </body>
          </div>
        </div>

        <div className="partners">
          <div className="partnersTxt">
            <h1>Creating the first zero food waste generation</h1>
            <h2>together with our awesome partners, buyers and sellers</h2>
          </div>
          {/* <div className="partnersImg"> */}
          {/* <img className="w-100" src={partnersImg} /> */}
          {/* <div
          style={{
            color: "black",
            height: "100px",
            width: "100px",
            backgroundColor: "purple",
            radius: "50%",
          }}
        /> */}

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
        </div>
      </div>
    </>
  );
};

export default AboutUs;
