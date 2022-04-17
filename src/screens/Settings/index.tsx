import React from "react";

import { useAuth } from "../../hooks/useAuth";
import { useDarkMode } from "../../hooks/useDarkMode";

import { Header } from "../../components/Header";
import { SettingOption } from "../../components/SettingOption";

import * as S from "./styles";

export function Settings() {
  const { logout } = useAuth();
  const { toggleTheme, theme } = useDarkMode();

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <S.Wrapper>
      <Header title={"Configurações"} />
      <S.Content>
        <SettingOption
          title={"Modo escuro"}
          type={"DarkMode"}
          onPress={handleTheme}
          valueSwitch={theme.title === "light" ? false : true}
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
