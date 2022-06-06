import { useContext } from "react";
import { DiscoverSelectedContext } from "../contexts/DiscoverSelectedContext";

export function useDiscoverSelected() {
  const value = useContext(DiscoverSelectedContext);

  return value;
}
