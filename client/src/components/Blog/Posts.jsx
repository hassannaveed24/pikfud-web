import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { instance, baseURL } from "../../utils/server";

const Posts = () => {
  const history = useHistory();
  const routeChange = () => {
    let path = "/blogpost";
    history.push(path);
  };
  const [blogsData, setBlogsData] = useState({});
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await instance.get("/admin/blogs");
        setBlogsData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("getBlogs Err", err.message);
      }
    };
    getBlogs();
  }, []);

  return (
    <div className="content-container is-blog">
      <div className="Blog__posts">
        <div className="Blog__post" onClick={routeChange}>
          <h1>{blogsData.title}</h1>
          <h2>{blogsData.description}</h2>
          <h3>
            {blogsData.createdAt} DAYS AGO | {blogsData.author}
          </h3>
        </div>

        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
      </div>
    </div>
  );
};
export default Posts;
