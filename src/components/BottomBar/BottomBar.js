import React from "react";
import PropTypes from 'prop-types'
import styles from "./BottomBar.module.scss";


function BottomBar(props) {
  return (
    <div className={`center footer ${styles.bottomBar}`}>
      <span>
        <a onClick={props.toggleCredits}>Icon Credits</a>
      </span>
      <span className={styles.right}>
        Background photo by{" "}
        <a href="https://unsplash.com/@introspectivedsgn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Erik Mclean
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/LSPUdV6IWsY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </div>
  );
}

BottomBar.propTypes = {
  toggleCredits: PropTypes.func
}
export default BottomBar;
