import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";

import * as S from "./styles";

type ToggleSwitchProps = {
  value: boolean;
};

export function ToggleSwitch({ value }: ToggleSwitchProps) {
  const [isActive, setIsActive] = useState(value);

  const styles = StyleSheet.create({
    shadowBox: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
  });

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <BorderlessButton
      onPress={() => {
        handleToggle();
      }}
    >
      <S.Wrapper style={styles.shadowBox} isActive={isActive}>
        <S.Circle></S.Circle>
      </S.Wrapper>
    </BorderlessButton>
  );
}
