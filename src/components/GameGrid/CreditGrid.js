import React from "react";
import PropTypes from "prop-types";

import styles from "./Grid.module.scss";

function CreditGrid() {
  return (
    <div className={`${styles.background} ${styles.grid}`}>
      <div>
        <a
          target="_blank"
          href="https://icons8.com/icon/weBiylHgmm61/beast"
          rel="noreferrer"
        >
          Beast
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://icons8.com/icon/g4PqERLj9sey/cyclops-marvel"
          rel="noreferrer"
        >
          Cyclops Marvel
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </div>
      <div>
        {" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/Gb5QNDAx4FM3/deadpool"
          rel="noreferrer"
        >
          Deadpool
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </div>
      <div>
        {" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/LW2cY0pnePue/gambit"
          rel="noreferrer"
        >
          Gambit
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>{" "}
      </div>
      <div>
        <a
          target="_blank"
          href="https://icons8.com/icon/rzu5Uifu2qNT/jean-grey"
          rel="noreferrer"
        >
          Jean Grey
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </div>
      <div>
        {" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/aVuriTjPzHus/mystique"
          rel="noreferrer"
        >
          Mystique
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </div>
      <div>
        {" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/LK6TckDBhPEE/wolverine"
          rel="noreferrer"
        >
          Wolverine
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </div>
      <div>
        {" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/7LcBRq799MZa/professor-x"
          rel="noreferrer"
        >
          Professor X
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </div>
      <div>
        {" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/vfZGGMjzmbfO/storm-marvel"
          rel="noreferrer"
        >
          Storm Marvel
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </div>
      <div>
        {" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/VQ9knCUQdiff/magneto"
          rel="noreferrer"
        >
          Magneto
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </div>
    </div>
  );
}

CreditGrid.propTypes = {
  handleClick: PropTypes.func,
};
export default CreditGrid;
