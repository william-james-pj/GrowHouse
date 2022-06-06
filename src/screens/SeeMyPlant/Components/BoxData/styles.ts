import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

export const Wrapper = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.disabled};
  overflow: hidden;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
`;
