import React, { useCallback, useMemo } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { baseURL, getBlogs, getFormattedDate, instance } from "utils";
import _ from "lodash";
import { When } from "react-if";
import { Loader } from "components/common";
import classnames from "classnames";
import { useState } from "react";
import { useEffect } from "react";
import logo from "../../assets/Blog/logo.png";
import queryString from "query-string";

const getCategories = async () => {
  const res = await instance.get("/admin/blogs");
  const categories = _.map(res.data, ({ category }) => category);
  return [...new Set(categories)];
};
const Posts = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const openPost = useCallback((_id) => {
    window.scrollTo(0, 0);
    history.push(`/blogpost?p=${_id}`);
  }, []);
  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const uniqueCategories = await getCategories();
      setCategories(uniqueCategories);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    get();
  }, [search, category]);
  const get = async () => {
    setLoading(true);

    let queryObject = {};
    if (category) queryObject.category = category;
    if (search) queryObject.search = search;
    const query = queryString.stringify(queryObject);

    try {
      const result = await instance.get(`/admin/blogs?${query}`);
      setData(result.data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const changeCategory = (currentCategory) => {
    if (currentCategory == category) {
      setCategory("");
      return;
    }

    setCategory(currentCategory);
  };

  return (
    <div className="content-container is-blog">
      <div className="Blog__filters content-container">
        <h1>I WANT TO READ ABOUT</h1>
        <ul>
          {_.map(categories, (uniqueCategory, index) => (
            <li
              key={`category-${index + 1}`}
              onClick={() => changeCategory(uniqueCategory)}
              className={classnames("Blog__filter", {
                active: category == uniqueCategory,
              })}
            >
              <img alt="Filter Icon" src={logo} />
              <h1>{uniqueCategory}</h1>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-center w-100 mt-4">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="Blog__search"
            placeholder="Looking for something?"
          />
        </div>
      </div>
      <div
        className={classnames("Blog__posts", {
          "content-min-height": isLoading || error,
        })}
      >
        <When condition={isLoading}>
          <Loader />
        </When>
        <When condition={error}>
          <h1>{error}</h1>
        </When>

        {!data.length && !isLoading && !error ? (
          <h1 className="nothing-found">NOTHING FOUND..</h1>
        ) : (
          _.map(
            data,
            ({ _id, category, title, createdAt, image, author }, index) => {
              const formattedDate = getFormattedDate(new Date(createdAt));
              return (
                <div
                  key={`blog-post-${index + 1}`}
                  className="Blog__post"
                  style={{ backgroundImage: `url(${baseURL + "/" + image})` }}
                  onClick={() => openPost(_id)}
                >
                  <h1>{category}</h1>
                  <p style={{ paddingLeft: "5%" }}>{title}</p>
                  <h3>
                    {formattedDate} | {author}
                  </h3>
                </div>
              );
            }
          )
        )}
      </div>
    </div>
  );
};
export default Posts;
