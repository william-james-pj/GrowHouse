import React from "react";

import HomeSVG from "../../../assets/svg/Home.svg";
import MyPlantsSVG from "../../../assets/svg/MyPlants.svg";
import DiscoverSVG from "../../../assets/svg/Discover.svg";
import SettingsSVG from "../../../assets/svg/Settings.svg";

import { useTheme } from "styled-components";

import * as S from "./styles";

interface IconTabBarProps {
  focused: boolean;
  icon: "Home" | "MyPlants" | "Discover" | "Settings";
}

export function IconTabBar({ focused, icon }: IconTabBarProps) {
  const theme = useTheme();

  return (
    <S.Icon active={focused}>
      {icon === "Home" ? (
        <HomeSVG
          fill={focused ? theme.colors.primary : theme.colors.disabled}
        />
      ) : icon === "MyPlants" ? (
        <MyPlantsSVG
          fill={focused ? theme.colors.primary : theme.colors.disabled}
        />
      ) : icon === "Discover" ? (
        <DiscoverSVG
          fill={focused ? theme.colors.primary : theme.colors.disabled}
        />
      ) : (
        <SettingsSVG
          fill={focused ? theme.colors.primary : theme.colors.disabled}
        />
      )}
    </S.Icon>
  );
}
