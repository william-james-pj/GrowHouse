import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.colors.card};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Container = styled.View`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px 0 16px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
  margin-left: 16px;
`;

export const Button = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ButtonContent = styled.View`
  height: 100%;
  width: 100%;
`;
