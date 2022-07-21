import React from "react";
import PropTypes from "prop-types";
import "./Grid.module.scss";
import Card from "../Cards/Card";
import beast from "../../Icons/icons8-beast-500.png";
import cyclops from "../../Icons/icons8-cyclops-marvel-500.png";
import deadpool from "../../Icons/icons8-deadpool-500.png";
import gambit from "../../Icons/icons8-gambit-500.png";
import jeanGrey from "../../Icons/icons8-jean-grey-500.png";
import magneto from "../../Icons/icons8-magneto-500.png";
import mystique from "../../Icons/icons8-mystique-500.png";
import professor from "../../Icons/icons8-professor-x-500.png";
import storm from "../../Icons/icons8-storm-marvel-500.png";
import wolverine from "../../Icons/icons8-wolverine-500.png";

function Grid(props) {
  const icons = [
    {
      src: beast,
      alt: "beast",
      id: "img01",
    },
    {
      src: cyclops,
      alt: "cyclops",
      id: "img02",
    },
    {
      src: deadpool,
      alt: "deadpool",
      id: "img03",
    },
    {
      src: gambit,
      alt: "gambit",
      id: "img04",
    },
    {
      src: jeanGrey,
      alt: "jean grey",
      id: "img05",
    },
    {
      src: magneto,
      alt: "magneto",
      id: "img06",
    },
    {
      src: mystique,
      alt: "mystique",
      id: "img07",
    },
    {
      src: professor,
      alt: "professor x",
      id: "img08",
    },
    {
      src: storm,
      alt: "storm",
      id: "img09",
    },
    {
      src: wolverine,
      alt: "wolverine",
      id: "img10",
    },
  ];

  // credit to https://stackoverflow.com/users/8112776/ashleedawg
  function shuffleArray(arr) {
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  const makeCards = shuffleArray(icons).map((icon) => (
    <Card src={icon.src} alt={icon.alt} id={icon.id} key={icon.id} handleClick={props.handleClick} />
  ));

  return <div className="grid">{makeCards}</div>;
}

Grid.propTypes = {
  handleClick: PropTypes.func,
};
export default Grid;
