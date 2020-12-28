import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Business from "./components/Business/Business";
import Blog from "./components/Blog/";
import BlogPost from "./components/Blog/Post";
import Jobs from "./components/Jobs/Jobs";
import JobPost from "./components/Jobs/JobPost";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import CookiePolicy from "./components/CookiePolicy/CookiePolicy";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Error from "./components/Error/Error";
export const route = [
  {
    path: "/",
    component: Home,
    name: "HOME",
    show: true,
  },
  {
    path: "/aboutus",
    component: AboutUs,
    name: "ABOUT US",
    show: true,
  },
  {
    path: "/blog",
    component: Blog,
    name: "BLOG",
    show: true,
  },
  {
    path: "/blogpost",
    component: BlogPost,
    name: BlogPost,
  },
  {
    path: "/business",
    component: Business,
    name: "BUSINESS",
    show: true,
  },
  {
    path: "/jobs",
    component: Jobs,
    name: "Jobs",
  },
  {
    path: "/termsandconditions",
    component: TermsAndConditions,
    name: "Terms & Conditions",
  },
  {
    path: "/privacypolicy",
    component: PrivacyPolicy,
    name: "Privacy Policy",
  },
  {
    path: "/cookiepolicy",
    component: CookiePolicy,
    name: "Cookie Policy",
  },
  {
    path: "/jobpost",
    component: JobPost,
  },
];

// const Routes = () => {
//   return (
//     <switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/AboutUs" component={AboutUs} />
//       <Route exact path="/business">
//         <Business />
//       </Route>
//       <Route exact path="/blog">
//         <Blog />
//       </Route>
//       <Route exact path="/jobs">
//         <Jobs />
//       </Route>
//       <Route exact path="/termsAndConditions">
//         <TermsAndConditions />
//       </Route>
//       <Route exact path="/privacyPolicy">
//         <PrivacyPolicy />
//       </Route>
//       <Route exact path="/cookiePolicy">
//         <CookiePolicy />
//       </Route>
//     </switch>
//   );
// };

// export default Routes;
