import React, { createContext, ReactNode, useState } from "react";

import { DiscoverType } from "../@types/types";

type DiscoverSelectedContextType = {
  discoverItem?: DiscoverType;
  setNewDiscoverItem: (item: DiscoverType) => void;
};

type DiscoverSelectedContextProviderProps = {
  children: ReactNode;
};

export const DiscoverSelectedContext = createContext(
  {} as DiscoverSelectedContextType
);

export function DiscoverSelectedContextProvider(
  props: DiscoverSelectedContextProviderProps
) {
  const [discoverItem, setDiscoverSelected] = useState<DiscoverType>();

  const setNewDiscoverItem = (item: DiscoverType) => {
    setDiscoverSelected(item);
  };

  return (
    <DiscoverSelectedContext.Provider
      value={{
        discoverItem,
        setNewDiscoverItem,
      }}
    >
      {props.children}
    </DiscoverSelectedContext.Provider>
  );
}
