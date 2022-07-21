import React from "react";
import styles from "./BottomBar.module.scss";

function BottomBar() {
  return (
    <div className={`center footer ${styles.bottomBar}`}>
      <span>
        <a>Icon Credits</a>
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

export default BottomBar;
