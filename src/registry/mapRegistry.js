// ========= variables ===========
let _draw = null;
let _map = null;

// =========== Map =============

export function setMap(map) {
  _map = map;
}

export function getMap() {
  return _map;
}

export function clearMap() {
  _map = null;
}

// =========== Draw =============

export function setDraw(draw) {
  _draw = draw;
}

export function getDraw() {
  return _draw;
}

export function clearDraw() {
  _draw = null;
}