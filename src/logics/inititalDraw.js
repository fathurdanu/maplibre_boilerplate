// import { useRef } from 'react';
import { getMap } from '../registry/mapRegistry';
import MaplibreDraw from "maplibre-gl-draw";

const useDraw = () => {
  const map = getMap();
  const draw = new MaplibreDraw({});

  if (map) {
    map.addControl(draw, "top-left");
  }

  return draw;
};

export default useDraw;
