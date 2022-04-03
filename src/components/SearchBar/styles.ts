import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.colors.card};
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.disabled,
}))`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.card};
  font-family: ${fonts.type.text700};

  height: 100%;
  width: 80%;
`;

export const IconContainer = styled.View`
  width: 20%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
