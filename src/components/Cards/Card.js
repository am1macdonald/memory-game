import React from "react";
import PropTypes from "prop-types";
import "./Card.module.scss";



function Card(props) {

  return (
    <div id={props.id} className="card" onClick={props.handleClick}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string,
  id: PropTypes.string,
  alt: PropTypes.string,
  handleClick: PropTypes.func
};

export default Card;
