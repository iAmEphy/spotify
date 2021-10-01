import React from 'react';
import { createContext, useContext, useReducer } from 'react';

//Context provides a way to pass data through the component tree without having to pass props down manually at every level.
export const DataContext = createContext();

//Children is <App> inside the DataLayer in index.js
export const DataLayer = ({ reducer, initialState, children }) => (
    <DataContext.Provider
        value={useReducer(reducer, initialState)}>
        {children}
    </DataContext.Provider>
);
//dispatch action to data value
//Accepts a context object (the value returned from React.createContext) and returns the current context 
//value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider>
// above the calling component in the tree.
export const useDataValue = () => useContext(DataContext);