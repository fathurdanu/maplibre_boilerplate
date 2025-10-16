import { useSelector } from "react-redux";
import { useEffect } from "react";

import { getMap } from "../registry/mapRegistry";
import { getAllLines, getAllPoints, getAllPolygons, initData } from "../registry/dataRegistry";

const Data = () => {
  const { isMapReady } = useSelector((state) => {
    return state.global;
  });

  // const points = getAllPoints();
  // const lines = getAllLines();
  // const polygons = getAllPolygons();

  // const applyLayers = () => {
  //   if (!isMapReady) return;

  //   const map = getMap();
  //   if (!map) return;

  //   // === Points ===
  //   const ptsFC = { type: "FeatureCollection", features: points || [] };

  //   if (!map.getSource("layer_point")) {
  //     map.addSource("layer_point", { type: "geojson", data: ptsFC });
  //   } else {
  //     map.getSource("layer_point").setData(ptsFC);
  //   }

  //   if (!map.getLayer("layer_point")) {
  //     map.addLayer({
  //       id: "layer_point",
  //       type: "circle",
  //       source: "layer_point",
  //       paint: { "circle-color": "#990000" },
  //     });
  //   }

  //   // === Polygons ===
  //   const polyFC = { type: "FeatureCollection", features: polygons || [] };

  //   if (!map.getSource("layer_polygon")) {
  //     map.addSource("layer_polygon", { type: "geojson", data: polyFC });
  //   } else {
  //     map.getSource("layer_polygon").setData(polyFC);
  //   }

  //   if (!map.getLayer("layer_polygon")) {
  //     map.addLayer({
  //       id: "layer_polygon",
  //       type: "fill",
  //       source: "layer_polygon",
  //       paint: { "fill-color": "#ffb84dff", "fill-opacity": 0.5 },
  //     });
  //   }

  //   // === Polygons ===
  //   const lineFC = { type: "FeatureCollection", features: lines || [] };

  //   if (!map.getSource("layer_line")) {
  //     map.addSource("layer_line", { type: "geojson", data: lineFC });
  //   } else {
  //     map.getSource("layer_line").setData(lineFC);
  //   }

  //   if (!map.getLayer("layer_line")) {
  //     map.addLayer({
  //       id: "layer_line",
  //       type: "fill",
  //       source: "layer_line",
  //       paint: { "fill-color": "#ffb84dff", "fill-opacity": 0.5 },
  //     });
  //   }
  // };

  // useEffect(() => {
  //   console.log("ada yang berubah")
  //   applyLayers();
  // }, [isMapReady, JSON.stringify(points), JSON.stringify(lines), JSON.stringify(polygons)])

  useEffect(() => {
    if (isMapReady) initData();
  }, [isMapReady])

  return null;
}

export default Data