import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

export const Wrapper = styled.View`
  width: 70%;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
`;
