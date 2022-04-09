import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  width: 50px;
  height: 20px;
  background: rgba(234, 246, 254, 1);
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  color: rgba(89, 139, 191, 1);
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`;
