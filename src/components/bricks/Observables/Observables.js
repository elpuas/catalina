/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import cx from 'classnames';
import { InView } from 'react-intersection-observer';
import { PropTypes } from 'prop-types';

/**
 * Wrapper for react-intersection-observer
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - The props of the component
 * @param {string} props.customClass - The custom class of the component
 * @param {string} props.isVisibleClass - The class to add when the element is visible
 * @param {number} props.threshold - Number between 0 and 1 indicating the percentage that should be visible before triggering.
 * @param {string} props.children - The children of the component
 * @return {Element} The React element to render.
 */
export default function Observables({
  children,
  isVisibleClass,
  customClass,
  threshold,
}) {
  return (
    <InView threshold={threshold}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={cx(inView && isVisibleClass, customClass && customClass)}
        >
          {children}
        </div>
      )}
    </InView>
  );
}

Observables.propTypes = {
  children: PropTypes.node,
  isVisibleClass: PropTypes.string,
  customClass: PropTypes.string,
  threshold: PropTypes.number,
};

Observables.defaultProps = {
  threshold: 0.5,
};
