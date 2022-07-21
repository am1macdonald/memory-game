import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";



function Card(props) {

  return (
    <div  className={styles.card}>
      <img className={styles.img} src={props.src} alt={props.alt} id={props.id} onClick={props.handleClick}/>
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
