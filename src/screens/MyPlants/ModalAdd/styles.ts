import styled from "styled-components/native";
import { fonts } from "../../../styles/fonts";

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const Modal = styled.View`
  background: ${(props) => props.theme.colors.background};

  width: 110%;
  min-height: 480px;
  position: absolute;
  bottom: -20px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 32px 16px 32px 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  margin-bottom: 16px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  margin: 16px 0;
`;

export const ButtonAdd = styled.Pressable`
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 50px;

  border-radius: 8px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const TextAdd = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  text-transform: uppercase;
`;

export const Separator = styled.View`
  width: 16px;
  height: 100%;
`;

export const FooterView = styled.View`
  background: transparent;
  width: 16px;
  height: 100%;
`;
