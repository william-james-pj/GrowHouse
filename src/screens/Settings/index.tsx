import React from "react";

import { Header } from "../../components/Header";
import { SettingOption } from "../../components/SettingOption";

import * as S from "./styles";

export function Settings() {
  const logOff = () => {
    console.log("Sair");
  };

  return (
    <S.Wrapper>
      <Header title={"Configurações"} />
      <S.Content>
        <SettingOption
          title={"Modo escuro"}
          type={"DarkMode"}
          onPress={logOff}
          key={"buttonDarkMode"}
        />
        <SettingOption
          title={"Sair"}
          type={"LogOff"}
          onPress={logOff}
          key={"buttonLogOff"}
        />
      </S.Content>
    </S.Wrapper>
  );
}
