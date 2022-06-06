import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import TrashSvg from "../../assets/svg/trash.svg";

export const Wrapper = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.background};
  overflow: hidden;
`;

export const ItemContainer = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 100%;
  height: 120px;
  border-radius: 8px;
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
  background: ${(props) => props.theme.colors.secundary};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
`;

export const DeleteBox = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.red};
  justify-content: center;
  align-items: flex-end;
  padding: 0 25px;
`;

export const DeleteBoxText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
`;

export const Trash = styled(TrashSvg).attrs((props) => ({
  fill: props.theme.colors.white,
  width: 17,
  height: 20,
}))``;
