import Header from "./Header";
import Filters from "./Filters";
import Posts from "./Posts";
import { Helmet } from "react-helmet";
const Blog = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pikfud - Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      {/* <Filters /> */}
      <Posts />
    </>
  );
};

export default Blog;
