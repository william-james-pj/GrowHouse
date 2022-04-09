import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  width: 130px;
  height: 160px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.card};

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 60%;

  background: ${(props) => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
`;

export const TextContainer = styled.View`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  text-align: center;
  margin-top: 3px;
`;
