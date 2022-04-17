import "styled-components ";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      background: string;
      card: string;

      text: string;
      disabled: string;

      white: string;
      red: string;

      blueLight: string;
      blueDark: string;
    };
  }
}
