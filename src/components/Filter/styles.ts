import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  width: 100%;
  min-width: 50px;
  height: 50px;
  background: ${(props) => props.theme.colors.card};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
