import React, { useCallback, useRef } from "react";
import Rectangle30 from "../../assets/Jobs/Rectangle30.jpg";
import { FaCaretDown } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { baseURL, getJobs } from "../../utils/server";
import { Loader } from "components/common";
import { useQuery } from "react-query";
import { If, When, Then, Else } from "react-if";
import { Helmet } from "react-helmet";
const Jobs = () => {
  const { isLoading, error, data } = useQuery("jobs", getJobs);

  const history = useHistory();
  const openingRef = useRef(null);
  const ourRef = useRef(null);

  const routeChange = useCallback(
    (_id) => {
      const path = "/jobpost?j=" + _id;
      history.push(path);
      window.scroll(0, 0);
    },
    [history]
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pikfud - Jobs</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="Jobs ">
        <div className="Jobs__header">
          <h1>
            Help us become the first zero food waste generation. Come work at
            Pikfud!
          </h1>
          <div className=" Jobs__header_button_caret ">
            <button
              className="Jobs__header__button"
              onClick={() => {
                openingRef?.current?.scrollIntoView();
              }}
            >
              VIEW OPEN POSITIONS
            </button>
            <FaCaretDown
              color="white"
              className="mt-3 caret"
              onClick={() => ourRef?.current?.scrollIntoView()}
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
          <img src={Rectangle30} alt="Gray Culture" />
        </div>
        <div className="JobsOpening" ref={openingRef}>
          <h1>Current Job Openings</h1>

          <When condition={isLoading}>
            <Loader />
          </When>
          <When condition={error}>
            <h1>{error?.message}</h1>
          </When>
          <Table hover>
            <tbody>
              {data?.map((job, index) => {
                return (
                  <tr
                    key={`job-row-${index + 1}`}
                    onClick={() => routeChange(job._id)}
                  >
                    <td>{job.title}</td>
                    <td
                      style={{ textAlign: "right" }}
                      // className="align-cell-right"
                    >
                      {job.department.title + "      "}.
                      {/* <img className="mx-3 " src={`${baseURL}/${job.image}`} /> */}
                      {job.city}
                    </td>
                    {/* <td style={{ textAlign: "right" }}>
                      .
                      <img className="mx-3 " src={`${baseURL}/${job.image}`} />
                      {job.city}
                    </td> */}
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Jobs;
