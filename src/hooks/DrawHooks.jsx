import React, { useEffect } from 'react'
import { getMap } from '../registry/mapRegistry';
import { useSelector } from 'react-redux';

function DrawHooks() {
  const { points, polygons, isMapReady } = useSelector((state) => {
    return state.global;
  });

  const on_create = () => { }
  const on_update = () => { }
  const on_delete = () => { }
  const on_click = () => {
    // console.log(isMapReady, points)
  }
  const on_modechange = () => { }

  useEffect(() => {
    if (!isMapReady) return;

    const map = getMap();
    if (!map) return;

    map.on("draw.create", on_create);
    map.on("draw.update", on_update);
    map.on("draw.delete", on_delete);
    map.on("click", on_click);
    map.on("draw.modechange", on_modechange);

  }, [isMapReady])

  return null;
}

export default DrawHooks