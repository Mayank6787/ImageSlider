import React from "react";
import Cont from "./Container.module.css";
const Container = (props) => {
  return <div className={Cont.Container}>{props.children}</div>;
};

export default Container;
