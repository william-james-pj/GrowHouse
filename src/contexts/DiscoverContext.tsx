import React, { createContext, ReactNode, useState, useEffect } from "react";
import { database } from "../services/firebase";

import { getDatabase, ref, child, get } from "firebase/database";

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
  const [discoverData, setDiscover] = useState<DiscoverType[]>([]);

  const loadData = async () => {
    let data: DiscoverType[] = [];

    const dbRef = ref(database);
    get(child(dbRef, `Discover`))
      .then((snapshot) => {
        if (!snapshot.exists()) {
          setDiscover(data);
          return;
        }

        snapshot.forEach((element) => {
          const val = element.val();
          data.push({
            id: val.id,
            name: val.name,
            scientificName: val.scientificName,
            category: val.category,
            environment: val.environment,
            size: val.size,
            description: val.description,
            water: val.water,
            frequency: val.frequency,
            temperature: val.temperature,
            lighting: val.lighting,
          });
        });

        setDiscover(data);
      })
      .catch((error) => {
        console.error(error);
      });
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
