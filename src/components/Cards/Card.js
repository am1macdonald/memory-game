import React from "react";
import PropTypes from "prop-types";
import "./Card.module.scss";

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt="error" />
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string,
};

export default Card;
