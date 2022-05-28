import React, { useState, useEffect } from "react";
import { Alert, Dimensions } from "react-native";

import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";

import { useOpenModalAdd } from "../../hooks/useOpenModalAdd";
import { useNavigation } from "@react-navigation/native";
import { MyPlantStackNavigationProp } from "../../@types/types";
import { useMyPlants } from "../../hooks/useMyPlants";

const finderWidth: number = 280;
const finderHeight: number = 230;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height - 200;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

import * as S from "./styles";

export function QRCodeRead() {
  const { validateSensor } = useMyPlants();
  const { openModal } = useOpenModalAdd();
  const usenavigation = useNavigation<MyPlantStackNavigationProp>();

  const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = async (scanningResult: BarCodeScannerResult) => {
    setScanned(true);

    const { data, bounds: { origin } = {} } = scanningResult;
    const { x, y }: any = origin;
    if (
      x <= viewMinX &&
      y <= viewMinY &&
      x >= viewMinX + finderWidth / 2 &&
      y >= viewMinY + finderHeight / 2
    ) {
      return;
    }

    const { status, msg } = await validateSensor(data);
    if (!status) {
      const message =
        msg === 1
          ? "Código inválido"
          : msg === 2
          ? "Sensor não encontrado"
          : "Sensor já adicionado";

      return Alert.alert(message, undefined, [
        {
          text: "OK",
          onPress: () => {
            setScanned(false);
            usenavigation.navigate("MyPlants");
          },
          style: "default",
        },
      ]);
    }
    usenavigation.navigate("MyPlants");
    openModal(true);
    setScanned(false);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <S.Wrapper>
      <S.Context>
        <S.BoxCode>
          <BarCodeScanner
            barCodeTypes={["qr"]}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ width: "100%", height: "100%" }}
          >
            <S.Mask showAnimatedLine />
          </BarCodeScanner>
        </S.BoxCode>
      </S.Context>
      <S.Footer>
        <S.Title>{"Coloque o código QR dentro da área"}</S.Title>
        <S.SubTitle>{"A digitalização começará automaticamente"}</S.SubTitle>
      </S.Footer>
    </S.Wrapper>
  );
}
