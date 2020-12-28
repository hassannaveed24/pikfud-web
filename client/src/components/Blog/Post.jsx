import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { parseQuery, getFormattedDate, baseURL, getBlog } from "utils";
import classnames from "classnames";
import { When } from "react-if";
import { Loader } from "components/common";
import _ from "lodash";
const Post = () => {
  const location = useLocation();
  const { data, error, isLoading } = useQuery(
    ["post", { _id: parseQuery(location.search).p }],
    getBlog,
    {
      retry: false,
    }
  );

  return (
    <div
      className={classnames("post-container", {
        "content-min-height": isLoading || error,
      })}
      style={{ marginTop: "10rem" }}
    >
      <When condition={isLoading}>
        <Loader />
      </When>
      <When condition={error}>
        <h1>{error?.message}</h1>
      </When>
      <When condition={data}>
        <h1 className="Post__title">{data?.title}</h1>
        <h2 className="Post__sub-title">{data?.category}</h2>
        <div className="Post__head__img__container">
          <img
            className="Post__head"
            src={`${baseURL}/${data?.image}`}
            alt="Post"
          />
        </div>

        {_.map(data?.description.split("\n"), (paragraph, index) => {
          return (
            <p
              key={`post-description-paragraph-${index + 1}`}
              className="Post__content"
            >
              {paragraph}
            </p>
          );
        })}
        {/* <body className="Post__content">
                    That’s where Toast Ale steps in. Bakeries and sandwich manufacturers local to
                    their breweries provide unsold bread to Toast, where it's turned into
                    award-winning craft beer. From pale ales to IPAs, these brews are putting a dent
                    in the staggering 24 million slices of bread that go to waste each day in the
                    UK.
                    <br />
                    <br />
                    ✔ Canned food
                    <br />
                    <br />
                    Canned food goes through an extremely high heat process to kill bacteria and
                    sterilise the contents. This makes canned food safe to eat years after the best
                    before date.
                    <br />
                    Fun fact: Back in 1974, canned food found in the wreck of a boat that sank in
                    1865 was tested and although the food content had deteriorated in appearance,
                    scientists said it was still safe to eat!
                    <br /> ✔ Canned food
                    <br />
                    <br />
                    Canned food goes through an extremely high heat process to kill bacteria and
                    sterilise the contents. This makes canned food safe to eat years after the best
                    before date.
                    <br />
                    Fun fact: Back in 1974, canned food found in the wreck of a boat that sank in
                    1865 was tested and although the food content had deteriorated in appearance,
                    scientists said it was still safe to eat!
                    <br />
                </body> */}
        <div className="Post__creater">
          <h3 className="Post__creater__name">{data?.author}</h3>
          <h2 className="Post__time">
            {getFormattedDate(new Date(data?.createdAt))}
          </h2>
        </div>
      </When>
    </div>
  );
};

export default Post;
