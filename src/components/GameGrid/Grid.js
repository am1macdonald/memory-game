import React from "react";
import PropTypes from "prop-types";
import Card from "../Cards/Card";
import icons from "../../Icons/index"

import styles from "./Grid.module.scss";

function Grid(props) {


  // credit to https://stackoverflow.com/users/8112776/ashleedawg
  function shuffleArray(arr) {
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const makeCards = shuffleArray(icons).map((icon) => (
    <Card src={icon.src} alt={icon.alt} id={icon.id} key={icon.id} handleClick={props.handleClick} />
  ));

  return <div className={styles.grid}>{makeCards}</div>;
}

Grid.propTypes = {
  handleClick: PropTypes.func,
};
export default Grid;
