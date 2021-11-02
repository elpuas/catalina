/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Initialize Menu context object.
export const AppContext = createContext();

/**
 * Export useContext Hook.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @return {Function} WordPress Context
 */
export function useAppContext() {
  return useContext(AppContext);
}

/**
 * Provide App Context for components.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param  {object}  props The component attributes as props.
 * @return {Element}       The child elements wrapped in a context provider.
 */
export default function AppContextProvider(props) {
  const { value, children } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles The Dark Mode State
   *
   * @author Alfredo Navas <elpuas@gmail.com>
   * @param {boolean} isMenuOpen The Mode Value.
   */
  function handleSetIsMenuOpen(isTheMenuOpen) {
    setIsMenuOpen(isTheMenuOpen);
  }

  const appContextProps = {
    ...value,
    isMenuOpen,
    handleSetIsMenuOpen,
  };

  return (
    <AppContextProvider.Provider value={appContextProps}>{children}</AppContextProvider.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.object,
  value: PropTypes.object,
};
