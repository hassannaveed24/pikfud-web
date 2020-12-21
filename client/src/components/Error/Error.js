import React from "react";

const Error = () => {
  return (
    <>
      <div
        className="content-min-height"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="error">Opss... Page Does not Exist</h1>
      </div>
    </>
  );
};

export default Error;
