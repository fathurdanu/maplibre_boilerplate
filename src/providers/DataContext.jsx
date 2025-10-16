import { createContext, useRef } from 'react';

const DataContext = createContext(null);

export function DataProvider ({ children }) {
  const dataRef = useRef(null);
  return (
    <DataContext.Provider value={dataRef}>
      {children}
    </DataContext.Provider>
  );
}