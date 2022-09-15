import React, { createContext, ReactNode, useState, useEffect } from "react";
import uuid from "react-native-uuid";

import { database } from "../services/firebase";
import { ref, child, set, get, remove, onValue } from "firebase/database";
import { useAuth } from "../hooks/useAuth";

import { MyPlantsType } from "../@types/types";

type MyPlantsContextType = {
  loadMyPlants: () => void;
  myPlantsData: MyPlantsType[];
  setPump: () => void;
  addNewPlat: (newPlant: MyPlantsType) => void;
  removePlant: (idPlant: string) => void;
  sensorCode: string | null;
  validateSensor: (code: string) => Promise<ResponseType>;
};

type ResponseType = {
  status: boolean;
  msg: number;
};

type MyPlantsContextProviderProps = {
  children: ReactNode;
};

export const MyPlantsContext = createContext({} as MyPlantsContextType);

export function MyPlantsContextProvider(props: MyPlantsContextProviderProps) {
  const { user } = useAuth();
  const [myPlantsData, setMyPlants] = useState<MyPlantsType[]>([]);
  const [sensorCode, setSensorCode] = useState<string | null>(null);

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
            sensorId: val.sensorId,
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
    await loadSensor(data);
  };

  const loadSensor = async (items: MyPlantsType[]) => {
    for (const item of items) {
      const starCountRef = ref(database, `Sensors/${item.sensorId}`);
      onValue(starCountRef, (snapshot) => {
        if (!snapshot.exists()) {
          return;
        }

        console.log("LoadSensor");

        let aux = [...myPlantsData];

        if (aux.length === 0) {
          aux = [...items];
        }

        aux.forEach((itemAux) => {
          if (itemAux.sensorId === item.sensorId) {
            itemAux.values = snapshot.val();
          }
        });

        setMyPlants(aux);
      });
    }
  };

  const setPump = async () => {
    const dbRef = ref(database);

    if (myPlantsData.length === 0) return;

    if (myPlantsData[0].values?.pump === undefined) return;

    let value = myPlantsData[0].values?.pump;
    let id = myPlantsData[0].sensorId;

    await set(child(dbRef, `Sensors/${id}/pump`), !value);
  };

  const addNewPlat = async (newPlant: MyPlantsType) => {
    const dbRef = ref(database);

    const userId = user?.id || "Error";

    await set(child(dbRef, `Users/${userId}/${newPlant.id}`), newPlant);

    loadMyPlants();
    setSensorCode(null);
  };

  const removePlant = async (idPlant: string) => {
    const userId = user?.id || "Error";

    const dbRef = ref(database, `Users/${userId}/${idPlant}`);
    await remove(dbRef).then(() => {
      loadMyPlants();
    });
  };

  const validateSensor = async (code: string): Promise<ResponseType> => {
    if (!code) return { status: false, msg: 1 };

    if (!uuid.validate(code)) return { status: false, msg: 1 };

    const exists = myPlantsData.filter((item) => item.sensorId === code);

    if (exists.length !== 0) return { status: false, msg: 3 };

    try {
      const dbRef = ref(database);
      const sensorRef = await get(child(dbRef, `Sensors/${code}/`));

      if (!sensorRef.exists()) {
        return { status: false, msg: 2 };
      }

      setSensorCode(code);
      return { status: true, msg: 4 };
    } catch (error) {
      return { status: false, msg: 1 };
    }
  };

  useEffect(() => {}, []);

  return (
    <MyPlantsContext.Provider
      value={{
        loadMyPlants,
        myPlantsData,
        setPump,
        addNewPlat,
        removePlant,
        sensorCode,
        validateSensor,
      }}
    >
      {props.children}
    </MyPlantsContext.Provider>
  );
}
