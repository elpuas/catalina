import * as React from "react";
import cx from "classnames";
import * as styles from "./HeroContainer.module.css";

export default function HeroContainer({ children }) {
  return (
    <div className={cx("alignfull", styles.heroContainer)}>{children}</div>
  );
}
