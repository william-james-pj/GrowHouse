import React, { createContext, ReactNode, useState, useEffect } from "react";

import { DiscoverType } from "../@types/types";

type DiscoverContextType = {
  loadData: () => void;
  discoverData: DiscoverType[];
};

type DiscoverContextProviderProps = {
  children: ReactNode;
};

export const DiscoverContext = createContext({} as DiscoverContextType);

export function DiscoverContextProvider(props: DiscoverContextProviderProps) {
  const [discoverData, setDiscover] = useState<DiscoverType[]>([{ id: "1" }]);

  const loadData = async () => {
    let data: DiscoverType[] = [];

    setDiscover(data);
  };

  useEffect(() => {}, []);

  return (
    <DiscoverContext.Provider
      value={{
        loadData,
        discoverData,
      }}
    >
      {props.children}
    </DiscoverContext.Provider>
  );
}
