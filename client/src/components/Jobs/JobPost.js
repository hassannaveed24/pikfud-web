import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { baseURL, getJob, parseQuery } from "utils";
import { useQuery } from "react-query";
import { Loader } from "components/common";
import { If, Else, Then, When } from "react-if";
import classnames from "classnames";
import _ from "lodash";

const JobPost = () => {
  let routerlocation = useLocation();
  let history = useHistory();

  const { isLoading, error, data } = useQuery(
    ["job", { _id: parseQuery(routerlocation.search).j }],
    getJob,
    {
      retry: false,
    }
  );

  return (
    <div className={classnames({ "content-min-height": isLoading || error })}>
      <When condition={isLoading}>
        <Loader />
      </When>
      <When condition={error}>
        <h1>{error?.message}</h1>
      </When>
      <When condition={data}>
        <div className="Job__post">
          <div className="Job__post_header">
            <div className="img-container">
              <img src={`${baseURL}/${data?.image}`} alt="Job" />
            </div>
            <div className="content">
              <h1 className="text-capitalize">{data?.title}</h1>
              <h2 className="text-capitalize">{data?.city}</h2>
            </div>
          </div>
          <div className="Job__post_content">
            {_.map(data?.description?.split(`\n`), (paragraph, index) => (
              <p key={`paragraph-${index + 1}`}>{paragraph}</p>
            ))}
            <button onClick={() => window.open(data.link, "_blank")}>
              APPLY NOW
            </button>
          </div>
        </div>
      </When>
    </div>
  );
};
export default JobPost;
