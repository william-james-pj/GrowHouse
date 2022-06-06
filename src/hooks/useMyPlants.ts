import { useContext } from "react";
import { MyPlantsContext } from "../contexts/MyPlantsContext";

export function useMyPlants() {
  const value = useContext(MyPlantsContext);

  return value;
}
