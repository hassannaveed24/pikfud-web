import React, { useCallback } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { getBlogs, getFormattedDate } from "utils";
import _ from "lodash";
import { When } from "react-if";
import { Loader } from "components/common";
import classnames from "classnames";

const Posts = () => {
    const history = useHistory();
    const openPost = useCallback((_id) => {
        window.scrollTo(0, 0);
        history.push(`/blogpost?p=${_id}`);
    }, []);

    const { data, isLoading, error } = useQuery("blogs", getBlogs, { retry: false });

    return (
        <div className="content-container is-blog">
            <div
                className={classnames("Blog__posts", { "content-min-height": isLoading || error })}
            >
                <When condition={isLoading}>
                    <Loader />
                </When>
                <When condition={error}>
                    <h1>{error?.message}</h1>
                </When>
                {_.map(data, ({ _id, title, description, createdAt, author }, index) => {
                    const formattedDate = getFormattedDate(new Date(createdAt));
                    return (
                        <div
                            key={`blog-post-${index + 1}`}
                            className="Blog__post"
                            onClick={() => openPost(_id)}
                        >
                            <h1>{title}</h1>
                            {_.map(description.split("\\"), (paragraph, index) => (
                                <p key={`blog-description-paragraph-${index + 1}`}>{paragraph}</p>
                            ))}
                            <h3>
                                {formattedDate} | {author}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Posts;
