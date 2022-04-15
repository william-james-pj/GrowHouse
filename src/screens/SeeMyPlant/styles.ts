import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const ModalContainer = styled.View`
  width: 110%;
  height: 400px;
  background: ${(props) => props.theme.colors.card};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  bottom: -20px;

  padding: 32px 16px 16px 16px;
`;

export const Header = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;

  margin-bottom: 16px;
`;

export const TextContainer = styled.View`
  width: 70%;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
`;

export const InfoContainer = styled.View`
  width: 30%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const InfoButton = styled.View`
  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.colors.secundary};
  border-radius: 8px;

  overflow: hidden;
`;

export const Button = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  margin: 32px 0 16px;
`;

export const Content = styled.View`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ClockContainer = styled.View`
  width: 25%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const BoxClockContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TwoDot = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.lg};
  font-family: ${fonts.type.text700};
`;

export const DateContainer = styled.View`
  width: 80%;

  display: flex;
  flex-direction: column;
`;

export const BoxDateContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
  margin-bottom: 4px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 16px;

  display: flex;
  align-items: flex-end;
`;

export const ButtonFooter = styled.View`
  width: 80px;
  height: 30px;
  background: ${(props) => props.theme.colors.secundary};
  border-radius: 8px;
  overflow: hidden;
`;

export const ButtonFooterContent = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonFooterText = styled.Text`
  color: ${(props) => props.theme.colors.card};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
`;
