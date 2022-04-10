import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { fonts } from "../../styles/fonts";

import SadSvg from "../../assets/svg/face-sad-cry.svg";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  padding: 0px 16px 32px 16px;
  padding-top: ${`${getStatusBarHeight() + 32}px`};
`;

export const SearchContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const SearchBarContainer = styled.View`
  width: 80%;
`;

export const FilterContainer = styled.View`
  width: 15%;
`;

export const Separator = styled.View`
  width: 100%;
  height: 16px;
`;

export const FooterView = styled.View`
  background: transparent;
  width: 100%;
  height: 40px;
`;

export const EmptyContainer = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyTitle = styled.Text`
  margin-top: 15px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;

export const EmptySubTitle = styled.Text`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
`;

export const EmptyIcon = styled(SadSvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 100,
  height: 110,
}))`
  margin-top: 50px;
`;
