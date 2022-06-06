import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  width: 50px;
  height: 20px;
  background: ${(props) => props.theme.colors.blueLight};
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.blueDark};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`;
