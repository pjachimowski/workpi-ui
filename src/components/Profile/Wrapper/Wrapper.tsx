import React from "react";
import "./Wrapper.scss";

const Wrapper: React.FC = (props) => {
  return <div className="wrapper">{props.children}</div>;
};

export default Wrapper;
