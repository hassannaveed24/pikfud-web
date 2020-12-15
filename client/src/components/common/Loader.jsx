import React from "react";
import _ from "lodash";

export const Loader = (props) => {
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className={`loader ${props?.className || ""}`} {..._.omit(props, ["className"])} />
        </div>
    );
};
