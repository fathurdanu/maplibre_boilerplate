import React, { useEffect } from 'react'
import { getDraw, getMap } from '../registry/mapRegistry';
import { useSelector } from 'react-redux';
import { pushLine, pushPoint, pushPolygon } from '../registry/dataRegistry';

function DrawHooks() {
  // let activeFeatureId = "";
  let undoStack = [];
  // let redoStack = []
  // let lastCounts = {};

  const { isMapReady } = useSelector((state) => {
    return state.global;
  });

  useEffect(() => {
    console.log("undoStack", undoStack)
  }, [undoStack.length])

  const on_create = (params) => {
    const draw = getDraw();
    if (!draw) return;
    
    const feature = params.features?.[0]
    const type = feature?.geometry?.type;

    if (type === "Point") {
      pushPoint(feature)
    } else if (type === "LineString") {
      pushLine(feature)
    } else if (type === "Polygon") {
      pushPolygon(feature)
    }
    draw.deleteAll();
  }
  const on_update = () => { }
  const on_delete = () => { }
  const on_click = () => {}

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