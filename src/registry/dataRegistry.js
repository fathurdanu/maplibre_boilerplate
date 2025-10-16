import { getMap } from "./mapRegistry";

// ========= variables ===========
let _points = [];
let _lines = [];
let _polygons = [];
let raf;

// =========== Point =============

export function pushPoint(newPoint) {
  _points.push(newPoint);
  flush("point")
}

export function getAllPoints() {
  return _points;
}

export function getPointById(id) {
  return _points.find(point => point.id === id)
}

export function removePointById(id) {
  _points = _points.filter(point => point.id !== id)
  flush("point")
}

// =========== Line =============

export function pushLine(newLine) {
  _lines.push(newLine);
  flush("line")
}

export function getAllLines() {
  return _lines;
}

export function getLineById(id) {
  return _lines.find(line => line.id === id)
}

export function removeLineById(id) {
  _lines = _lines.filter(line => line.id !== id)
  flush("line")
}

// =========== Polygon =============

export function pushPolygon(newPolygon) {
  _polygons.push(newPolygon);
  flush("polygon")
}

export function getAllPolygons() {
  return _polygons;
}

export function getPolygonById(id) {
  return _polygons.find(polygon => polygon.id === id)
}

export function removePolygonById(id) {
  _polygons = _polygons.filter(polygon => polygon.id !== id)
  flush("polygon")
}

// ==================================

export const flush = (type) => {
  const sourceId = `layer_${type}`
  const map = getMap();
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const src = map.getSource(sourceId);
    let geojson = { type: "FeatureCollection" };
    if (type === "point" && src) geojson.features = _points;
    else if (type === "line" && src) geojson.features = _lines;
    else if (type === "polygon" && src) geojson.features = _polygons
    src.setData(geojson)
  });
};

export const initData = () => {
  const map = getMap();
  if (!map) return;

  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    implementToMap("point");
    implementToMap("line");
    implementToMap("polygon");
  });
}

export const implementToMap = (type) => {
  const sourceId = `layer_${type}`
  let geojson = { type: "FeatureCollection" };

  const map = getMap();
  if (!map) return;

  let body = { id: sourceId, source: sourceId }
  if (type === "point") {
    body.type = "circle";
    body.paint = { "circle-color": "#990000" };
    geojson.features = _points
  } else if (type === "line") {
    body.type = "line";
    body.paint = { 'line-color': "#ce1e1eab", 'line-width': 6 }
    geojson.features = _lines
  } else if (type === "polygon") {
    body.type = "fill";
    body.paint = { "fill-color": "#ffb84dff", "fill-opacity": 0.5 }
    geojson.features = _polygons
  };

  if (!map?.getSource(sourceId)) {
    map.addSource(sourceId, { type: "geojson", data: geojson });
  } else {
    map.getSource(sourceId).setData(geojson);
  }

  if (!map?.getLayer(sourceId)) {
    map.addLayer(body);
  }
}