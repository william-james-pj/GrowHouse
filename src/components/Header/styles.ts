import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${fonts.size.xxl};
  font-family: ${fonts.type.text700};
`;
