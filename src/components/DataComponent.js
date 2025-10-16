import { useSelector } from "react-redux";
import { useEffect } from "react";
import { initData } from "../registry/dataRegistry";

const Data = () => {
  const { isMapReady } = useSelector((state) => {
    return state.global;
  });

  useEffect(() => {
    if (isMapReady) initData();
  }, [isMapReady])

  return null;
}

export default Data