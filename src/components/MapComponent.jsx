import { useEffect} from "react";
import maplibregl from "maplibre-gl";
import { useDispatch } from "react-redux";

import "maplibre-gl/dist/maplibre-gl.css";
import "maplibre-gl-draw/dist/mapbox-gl-draw.css";
import inititalDraw from "../logics/inititalDraw";
import { setDraw, setMap } from "../registry/mapRegistry";
import { setValue } from "../slices/globalSlice";

export default function MapComponent() {
  const dispatch = useDispatch()

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [118.72762419354456, -0.2055368192132505],
      zoom: 3.7,
      maxPitch: 85,
      attributionControl: false,
      canvasContextAttributes: { antialias: true },
    });

    const onLoad = () => dispatch(setValue({ key: "isMapReady", value: true }));
    map.once("load", onLoad);

    // Add navigation controls
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }));
    setMap(map);

    const draw = inititalDraw();
    setDraw(draw);

    return () => { if (map) map.remove() };
  }, []);

  return (
    <div id="map"/>
  );
}
