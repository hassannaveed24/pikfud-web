import React from "react";
import aboutProblem from "../../assets/AboutUs/about-problem.png";
import aboutSolution from "../../assets/AboutUs/about-solution.png";
// import partnersImg from "../../assets/AboutUs/partnersImg.png";
import foundedImg from "../../assets/AboutUs/foundedImg.png";
import aboutBreadcrumb from "../../assets/AboutUs/about-breadcrumb2.png";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pikfud - About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="AboutUs__Main">
        <img
          alt="About Us"
          src={aboutBreadcrumb}
          style={{
            height: "auto",
            width: "100vw",
            marginBottom: "10rem",
          }}
        />
        <div className="wasteProblem wasteProblem__Uppper ">
          <div>
            <img
              alt="Waste Problem"
              className="wasteProblemImgDiv"
              src={aboutProblem}
            />
          </div>
          <div className="wasteProblemTextDiv">
            <h1>წარმოებული ვარგისი საჭმლის 1/3 ნაგავში მიდის.</h1>
            <br />
            <body>
            წარმოებული საკვების მესამედი ფუჭად იხარჯება. საჭმლის ნარჩენები იმდენივე ნახშირბადს გამოყოფს, რამდენიც მილიონობით მანქანა. 
            რა მოხდება თუ ჩვენ უფრო მეტად ვიზრუნებთ საჭმელზე? 
              <br />
              <br />
              <br />
              დარწმუნებულნი ვართ, ერთხელ მაინც გიფიქრიათ, რა მოსდის იმ საკვებს, რომელიც კვების ობიექტში დამზადდა თუმცა მომხმარებლამდე ვერ მივიდა.
              სტატისტიკურად, ხშირ შემთხვევაში, ასეთი საკვები ნაგავსაყრელებში პოულობენ ადგილს.
            </body>
          </div>
        </div>

        <div className="wasteProblem">
          <div className="solutionTextDiv">
            <h1>გამოსავალი</h1>
            <br />
            <body>
            Pikfud არის სტარტაპი, რომელსაც სურს საქართველოში შემოიტანოს ევროპაში უკვე გავრცელებული პრაქტიკა და შეამციროს საკვების გადაყრა,
               ამასთან ერთად კი მომხმარებელს გაუიაფოს პროდუქტი.
              <br />
              <br />
              <br />
              თქვენ იწერთ Pikfud-ს თქვენს სმარტფონში, სადაც ობიექტი განათავსებს პროდუქტს, რომელიც ვერ რეალიზდა, მომდევნო დღეს კი მათი გაყიდვა აღარ შეიძლება.
               თქვენ შეგეძლებათ აირჩიოთ თქვენთვის სასურველი, იყიდოთ 50% ფასდაკლებით, შემდეგ კი მიბრძანდეთ ლოკაციაზე და აიღოთ თქვენი შეძენილი პროდუქტი
            </body>
          </div>
          <div>
            <img
              alt="Waste Problem"
              className="wasteProblemImgDiv"
              src={aboutSolution}
            />
          </div>
        </div>

        <div className="founded">
          {/* <div className="foundedImgDiv"> */}
          <img
            alt="Founded Background"
            className="foundedImg"
            src={foundedImg}
          />
          {/* </div> */}
          <div className="foundedTxt">
            <h1>2020</h1>
            <br />
            <br />
            <h1>პიკფუდის შექმნა</h1>
            <br />
            <br />
            <body>
            პიკფუდი არის კულტურა, რომელიც ევროპაში უკვე მრავალი წელია უკვე ფუნქციონირებს და სარგებლობს დიდი პოპულარულობით.
            პიკფუდის ჯგუფი შედგება ახალგაზრდებისაგან რომლებიც ცდილობენ ეს კულტურა დანერგონ საქართველოში და წვლილი შეიტანონ უკეთესი მომავლისაკენ
            </body>
          </div>
        </div>

        {/* <div className="partners">
          <div className="partnersTxt">
            <h1>Creating the first zero food waste generation</h1>
            <h2>together with our awesome partners, buyers and sellers</h2>
          </div>

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
        </div> */}
      </div>
    </>
  );
};

export default AboutUs;
