import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  padding: 0px 16px 32px 16px;
  padding-top: ${`${getStatusBarHeight() + 32}px`};
`;

export const TextSection = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  margin-bottom: 8px;
`;

export const BoxContainer = styled.View`
  width: 100%;
  height: 100px;
  background: ${(props) => props.theme.colors.secundary};

  border-top-left-radius: 16px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 32px;
`;

export const BoxTextContainer = styled.View`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const BoxTitle = styled.Text`
  color: ${(props) => props.theme.colors.card};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
`;

export const BoxSubTitle = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  margin-top: 4px;
`;

export const BoxIconContainer = styled.View`
  width: 20%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxSquare = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.card};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataContainer = styled.View`
  width: 100%;
`;

export const DataRow = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
