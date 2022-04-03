import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  width: 48%;
  height: 110px;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 8px;

  padding: 8px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
`;

export const BallContainer = styled.View`
  width: 50%;
`;

export const Ball = styled.View`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.secundary};
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwitchContainer = styled.View`
  width: 50%;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const TextContainer = styled.View`
  width: 100%;
  display: flex;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  margin-top: 0px;
`;
