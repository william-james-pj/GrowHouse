import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  padding: 0px 16px 32px 16px;
  padding-top: ${`${getStatusBarHeight() + 32}px`};
`;

export const TopBar = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;

  margin-bottom: 16px;
`;

export const TopBarButton = styled.View`
  width: 13px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${fonts.size.md};
  font-family: ${fonts.type.text700};
  margin-bottom: 4px;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
`;

export const InfoContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-top: 32px;
`;

export const ImageContainer = styled.View`
  width: 45%;
  min-width: 150px;
  height: 180px;
  background: ${(props) => props.theme.colors.secundary};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Image = styled.Image`
  width: 140px;
  height: 140px;
`;

export const InfoTextContainer = styled.View`
  width: 55%;
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
  margin: 32px 0;
`;

export const PropertyContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
