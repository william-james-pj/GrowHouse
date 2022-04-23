import React, { createContext, ReactNode, useState, useEffect } from "react";

import { database } from "../services/firebase";
import { ref, child, set, get } from "firebase/database";
import { useAuth } from "../hooks/useAuth";

import { MyPlantsType } from "../@types/types";

type MyPlantsContextType = {
  loadMyPlants: () => void;
  myPlantsData: MyPlantsType[];
  addNewPlat: (newPlant: MyPlantsType) => void;
};

type MyPlantsContextProviderProps = {
  children: ReactNode;
};

export const MyPlantsContext = createContext({} as MyPlantsContextType);

export function MyPlantsContextProvider(props: MyPlantsContextProviderProps) {
  const { user } = useAuth();
  const [myPlantsData, setMyPlants] = useState<MyPlantsType[]>([]);

  const loadMyPlants = async () => {
    let data: MyPlantsType[] = [];

    const userId = user?.id || "Error";

    const dbRef = ref(database);
    await get(child(dbRef, `Users/${userId}/`))
      .then((snapshot) => {
        if (!snapshot.exists()) {
          setMyPlants(data);
          return;
        }

        snapshot.forEach((element) => {
          const val = element.val();

          data.push({
            id: val.id,
            name: val.name,
            surname: val.surname,
            imageUrl: val.imageUrl,
            plantId: val.plantId,
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });

    setMyPlants(data);
  };

  const addNewPlat = async (newPlant: MyPlantsType) => {
    let aux = [...myPlantsData];
    const dbRef = ref(database);

    const userId = user?.id || "Error";

    await set(child(dbRef, `Users/${userId}/${newPlant.id}`), newPlant);

    aux.push(newPlant);
    setMyPlants(aux);
  };

  useEffect(() => {}, []);

  return (
    <MyPlantsContext.Provider
      value={{
        loadMyPlants,
        myPlantsData,
        addNewPlat,
      }}
    >
      {props.children}
    </MyPlantsContext.Provider>
  );
}
