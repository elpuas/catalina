import * as React from "react";
import PropTypes from "prop-types";
import { ClockICO } from "../Icons/Icons";
import * as styles from "./DateMeta.module.css";
/**
 * The date component.
 *
 * @param {Object} props The props object.
 * @param {string} props.date The date string.
 * @return {Element} Renders the date component.
 */
export default function DateMeta({ date }) {
  return (
    <div className={styles.date}>
      <ClockICO />
      <p>{date}</p>
    </div>
  );
}

DateMeta.propTypes = {
  date: PropTypes.string,
};

DateMeta.defaultProps = {
  date: "10/24/2021",
};
