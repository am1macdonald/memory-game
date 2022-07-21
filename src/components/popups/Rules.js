import React from "react";
import PropTypes from "prop-types"
import styles from "./popups.module.scss";

function Rules(props) {
  return <div className={`center ${styles.popup}`}>
    <h2>Rules:</h2>
    <p>To play do the thing</p>
    <button onClick={props.toggle}>Start</button>
  </div>;
}

Rules.propTypes = {
  toggle: PropTypes.func
}

export default Rules;
