import React from "react";

import homePic from "assets/Home/homepage.png";
import appDownload from "assets/Home/appDownload.png";
import rescueFood from "assets/Home/rescueFood.png";
import pickIt from "assets/Home/pickIt.png";
import wastage from "assets/Home/wastage.png";
import pizza from "assets/Home/pizza.jpg";
import { Helmet } from "react-helmet";
import appleStore from "../../assets/Footer/logo-app-store-brand-font-png-favpng-Gb5FcTZcrb9bRikX49s26mMVn1.png";
import googlePlay from "../../assets/Footer/en_badge_web_generic1.png";

const Home = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pikfud</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="HomeScreen1">
        <div className="HomePicContainer">
          <img className="HomeScreen1-homePic" src={homePic} />
          <div className="SocialIcons-HomeScreen">
            <img
              src={appleStore}
              className="googlePlay"
              style={{ marginBottom: "2rem" }}
            />
            <a
              onClick={() =>
                openInNewTab(
                  "https://play.google.com/store/apps/details?id=com.pikfud"
                )
              }
            >
              <img src={googlePlay} className="googlePlay" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="HomeScreen1-title">ეს მარტივია</h3>
        </div>
        <div className="HomeScreen1Content">
          <div className="">
            <img className=" HomeScreen1NavImg" src={appDownload} />
            <h4 className="HomeScreen1-nav">გადმოწერე აპლიკაცია</h4>
          </div>
          <div className="">
            <img className=" HomeScreen1NavImg" src={rescueFood} />
            <h4 className="HomeScreen1-nav">
              გადაარჩინე საკვები ნახევარ ფასად
            </h4>
          </div>
          <div className="">
            <img className=" HomeScreen1NavImg" src={pickIt} />
            <h4 className="HomeScreen1-nav">
              თქვენი შეკვეთა წასაღებად მზად არის
            </h4>
          </div>
        </div>
      </div>
      {/* HomeScreen2 */}
      <div className="HomeScreen2">
        <h1 className="HomeScreen2H4">გადმოწერეთ აპლიკაცია და შეუკვეთეთ</h1>
        <h2 className="HomeScreen2Body">
          ყოველ დღე, ჯანსაღი და ვარგისი საკვები კაფეებიდან, რესტორნებიდან,
          სასტუმროებიდან და მარკეტებიდან პირდაპირ ნაგავსაყრელებში პოულობენ
          ადგილს.
          <br />
          <br />
          ერთი მიზეზის გამო: რადგან დროზე რეალიზაცია ვერ მოხერხდა. პიკფუდთან
          ერთად თქვენ შეძლებთ ეს საკვები გადაარჩინოთ 50% ფასდაკლებით
        </h2>
      </div>

      <div>
        <div className="flex-container HomeScreen2Wastage">
          <div>
            <img src={wastage} className="HomeScreen2WastageImg" />
          </div>
          <div className="HomeScreenWastage2Body">
            <h2 className="HomeScreen2WastageH2">
              წარმოებული ვარგისი საჭმლის 1/3 ნაგავში იყრება.
            </h2>
            <h1 className="HomeScreen2WastageH1">
              მოდით ყველამ შევიტანოთ წვლილი ამ ვითარების გასაუმჯობესებლად.
            </h1>
          </div>
        </div>
      </div>

      <div className="HomeScreen2">
        <h1 className="HomeScreen2H4">პიკფუდის მიზანი</h1>
        <h2 className="HomeScreen2Body">
          Pikfud არის სტარტაპი, რომელსაც სურს საქართველოში შემოიტანოს ევროპაში
          უკვე გავრცელებული პრაქტიკა და შეამციროს საკვების გადაყრა, ამასთან
          ერთად კი მომხმარებელს გაუიაფოს პროდუქტი.
          <br />
          <br />
          თქვენ შეგეძლებათ აირჩიოთ თქვენთვის სასურველი, იყიდოთ 50% ფასდაკლებით,
          შემდეგ კი მიბრძანდეთ ლოკაციაზე და აიღოთ თქვენი შეძენილი პროდუქტი
          <br />
          <br />
          {/* But that’s not the only problem. It takes a lot of land, energy and
          water to make our food. By wasting that food, we also waste the
          resources that went into producing it, putting needless strain on our
          earth. */}
        </h2>
      </div>

      <div className="flex-container HomeScreen2Partners" style={{}}>
        <h1 className="HomeScreen2PartnersH1">ჩვენი პარტნიორები</h1>

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
              გადაარჩინე
              <br />
              გემრიელი საკვები
            </h1>
            <div className="CallToAction__buttons-container">
              <button type="button" className="CallToAction__button">
                გახდი პარტნიორი
              </button>
              <button type="button" className="CallToAction__button">
                გადმოწერე აპი
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
