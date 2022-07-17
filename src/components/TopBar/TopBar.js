import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import "./TopBar.module.scss";

function TopBar(props) {
  return (
    <nav>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div>
        <p>Score: {props.score}</p>
      </div>
    </nav>
  );
}

TopBar.propTypes = {
  title: PropTypes.string,
  score: PropTypes.string,
};

export default TopBar;
