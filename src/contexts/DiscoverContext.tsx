import React, { createContext, ReactNode, useState, useEffect } from "react";
import { database, storage } from "../services/firebase";

import { ref, child, get } from "firebase/database";
import { ref as refStorage, getDownloadURL } from "firebase/storage";

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
    let dataWithImage: DiscoverType[] = [];

    const dbRef = ref(database);
    await get(child(dbRef, `Discover`))
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
            image: val.image,
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });

    await Promise.all(
      data.map(async (element) => {
        const url = await loadImage(element.image);
        dataWithImage.push({
          ...element,
          image: url,
        });
      })
    );

    setDiscover(dataWithImage);
  };

  const loadImage = async (imageName: string) => {
    const pathReference = refStorage(storage, `Discover/${imageName}`);
    let response = "";
    await getDownloadURL(pathReference)
      .then((url) => {
        response = url;
      })
      .catch((error) => {
        response = "";
      });

    return response;
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
