import { useContext } from "react";
import { DiscoverContext } from "../contexts/DiscoverContext";

export function useDiscover() {
  const value = useContext(DiscoverContext);

  return value;
}
