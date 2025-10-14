// MapContext.jsx
import { createContext, useRef } from 'react';

const MapContext = createContext(null);

export function MapProvider ({ children }) {
  const mapRef = useRef(null);
  return (
    <MapContext.Provider value={mapRef}>
      {children}
    </MapContext.Provider>
  );
}