import * as React from "react";
import PropTypes from "prop-types";
import displayBlock from "../../../functions/display-block";
/**
 * Render the Blocks component.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {Array}   props.blocks The array of blocks.
 * @return {Element} The Blocks component.
 */
export default function Blocks({ blocks }) {
  return (
    <>
      {!!blocks?.length &&
        blocks.map((block, index) => displayBlock(block, index))}
    </>
  );
}

Blocks.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blocks: PropTypes.array.isRequired,
};
