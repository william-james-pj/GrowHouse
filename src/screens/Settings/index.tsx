import React from "react";

import { useAuth } from "../../hooks/useAuth";

import { Header } from "../../components/Header";
import { SettingOption } from "../../components/SettingOption";

import * as S from "./styles";

export function Settings() {
  const { logout } = useAuth();

  return (
    <S.Wrapper>
      <Header title={"Configurações"} />
      <S.Content>
        <SettingOption
          title={"Modo escuro"}
          type={"DarkMode"}
          onPress={() => {}}
          key={"buttonDarkMode"}
        />
        <SettingOption
          title={"Sair"}
          type={"LogOff"}
          onPress={() => logout()}
          key={"buttonLogOff"}
        />
      </S.Content>
    </S.Wrapper>
  );
}
