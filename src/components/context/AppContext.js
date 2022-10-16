/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a default context (TypeError: Cannot destructure property).
const defaultContext = {
  isMenuOpen: true,
};

// Initialize context object.
export const AppContext = createContext(defaultContext);

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
   * Toggles The Menu State
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
    <AppContext.Provider value={appContextProps}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.object,
  value: PropTypes.object,
};
