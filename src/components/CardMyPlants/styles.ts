import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.card};
  overflow: hidden;
`;

export const Row = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.View`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};

  margin: 8px 0 16px;
`;

export const ImageContainer = styled.View`
  width: 40%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageBox = styled.View`
  width: 90%;
  height: 90px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
`;
