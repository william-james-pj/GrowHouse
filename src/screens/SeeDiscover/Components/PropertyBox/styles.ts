import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

export const Wrapper = styled.View`
  width: 47%;
  height: 60px;
  background: ${(props) => props.theme.colors.card};
  border-radius: 8px;
  padding: 0 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 14px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
`;
