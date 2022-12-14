import React from "react";
import dStyle from "./detail.module.css";

const Diff = ({ diff }) => {
  if (diff) {
    return (
      <div className={dStyle.detail}>
        Selected difficulty:
        <strong>{`${diff.name}`}</strong>
      </div>
    );
  } else {
    return <div className={dStyle.detail}>{"No difficulty set"}</div>;
  }
};

export default Diff;
