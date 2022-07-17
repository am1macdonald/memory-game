import React from "react";
import PropTypes from "prop-types";
import "./Grid.module.scss";
import Card from "../Cards/Card";

function Grid(props) {
  const icons = [
    "../Icons/icons8-beast-500.png",
    "../Icons/icons8-cyclops-marvel-500.png",
    "../Icons/icons8-deadpool-500.png",
    "../Icons/icons8-gambit-500.png",
    "../Icons/icons8-jean-grey-500.png",
    "../Icons/icons8-magneto-500.png",
    "../Icons/icons8-mystique-500.png",
    "../Icons/icons8-professor-x-500.png",
    "../Icons/icons8-storm-marvel-500.png",
    "../Icons/icons8-wolverine-500.png",
  ];

  // credit to https://stackoverflow.com/users/8112776/ashleedawg
  function shuffleArray(arr) {
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const makeCards = shuffleArray(icons).map((icon) => {
    <Card src={icon} handleClick={props.handleClick} />;
  });

  return <div>{makeCards}</div>;
}

Grid.propTypes = {
  handleClick: PropTypes.func,
};
export default Grid;
