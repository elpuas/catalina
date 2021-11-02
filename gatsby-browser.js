import * as React from 'react';
import './src/styles/global.css';
import AppContextProvider from './src/components/context/AppContext';

export const wrapRootElement = ({ element }) => (
    <AppContextProvider>{element}</AppContextProvider>
)