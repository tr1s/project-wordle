import React from "react";

function Banner({ status, children }) {
  const className = `${status} banner`;
  return <div className={className}>{children}</div>;
}

export default Banner;
