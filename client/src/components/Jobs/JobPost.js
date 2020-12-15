import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { instance, baseURL } from "../../utils/server";
const JobPost = () => {
  let location = useLocation();
  const [jobData, setjobData] = useState({});

  useEffect(() => {
    console.log(location.search);
    const parsed = queryString.parse(location.search);
    console.log(parsed);

    const getJob = async () => {
      try {
        const res = await instance.get("/admin/jobs/single?_id=" + parsed.j);

        setjobData(res.data);
        // console.log(res.data);
        console.log(`${baseURL + "/" + jobData.image}`);
      } catch (err) {
        console.log("getJob Err", err.message);
      }
    };
    getJob();
  }, []);

  return (
    <>
      <div className="Job__post">
        <div
          className="Job__post_header"
          style={
            {
              // backgroundImage: `url(${baseURL + "/" + jobData.image})`,
              // width: "100vw",
              // height: "320px",
            }
          }
        >
          <h1>{jobData.title}</h1>
          <h2>{jobData.city}</h2>
        </div>
        <div className="Job__post_content">
          <h2>{jobData.description}</h2>
          <button>APPLY NOW</button>
        </div>
      </div>
    </>
  );
};
export default JobPost;
