import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import "./TopBar.module.scss";

function TopBar(props) {
  return (
    <nav>
      <h1>{props.title}</h1>
    </nav>
  );
}

TopBar.propTypes = {
  title: PropTypes.string,
};

export default TopBar;
