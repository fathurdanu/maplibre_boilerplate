import { useSelector } from "react-redux";
import { getMap } from "../registry/mapRegistry";
import { useEffect } from "react";

const Data = () => {
  const { points, polygons, isMapReady } = useSelector((state) => {
    return state.global;
  });

  const applyLayers = () => {
    if (!isMapReady) return;

    const map = getMap();
    if (!map) return;

    // === Points ===
    const ptsFC = { type: "FeatureCollection", features: points || [] };

    if (!map.getSource("layer_point")) {
      map.addSource("layer_point", { type: "geojson", data: ptsFC });
    } else {
      map.getSource("layer_point").setData(ptsFC);
    }

    if (!map.getLayer("layer_point")) {
      map.addLayer({
        id: "layer_point",
        type: "circle",
        source: "layer_point",
        paint: { "circle-color": "#990000" },
      });
    }

    // === Polygons ===
    const polyFC = { type: "FeatureCollection", features: polygons || [] };

    if (!map.getSource("layer_polygon")) {
      map.addSource("layer_polygon", { type: "geojson", data: polyFC });
    } else {
      map.getSource("layer_polygon").setData(polyFC);
    }

    if (!map.getLayer("layer_polygon")) {
      map.addLayer({
        id: "layer_polygon",
        type: "fill",
        source: "layer_polygon",
        paint: { "fill-color": "#ffb84dff", "fill-opacity": 0.5 },
      });
    }
  };

  useEffect(() => {
    applyLayers();
  }, [isMapReady, JSON.stringify(points), JSON.stringify(polygons)])

  return null;
}

export default Data