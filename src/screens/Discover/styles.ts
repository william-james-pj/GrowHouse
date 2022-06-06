import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { fonts } from "../../styles/fonts";

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
