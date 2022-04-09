import React, { createContext, ReactNode, useState, useEffect } from "react";

import { MyPlantsType } from "../@types/types";

type MyPlantsContextType = {
  loadData: () => void;
  myPlantsData: MyPlantsType[];
};

type MyPlantsContextProviderProps = {
  children: ReactNode;
};

export const MyPlantsContext = createContext({} as MyPlantsContextType);

export function MyPlantsContextProvider(props: MyPlantsContextProviderProps) {
  const [myPlantsData, setMyPlants] = useState<MyPlantsType[]>([{ id: "1" }]);

  const loadData = async () => {
    let data: MyPlantsType[] = [];

    setMyPlants(data);
  };

  useEffect(() => {}, []);

  return (
    <MyPlantsContext.Provider
      value={{
        loadData,
        myPlantsData,
      }}
    >
      {props.children}
    </MyPlantsContext.Provider>
  );
}
