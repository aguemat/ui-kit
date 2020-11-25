import styled from "styled-components";
import { defaultTheme } from "../../themes/defaultTheme";

export const ButtonStyled = styled.button`
  color: ${({ theme, themeStyle }) => theme.buttons[themeStyle].color};
  background-color: ${({ theme, themeStyle }) =>
    theme.buttons[themeStyle].backgroundColor};
  border-color: ${({ theme, themeStyle }) =>
    theme.buttons[themeStyle].borderColor};

  &:hover {
    color: ${({ theme, themeStyle }) => theme.buttons[themeStyle].colorHover};
    background-color: ${({ theme, themeStyle }) =>
      theme.buttons[themeStyle].backgroundColorHover};
    border-color: ${({ theme, themeStyle }) =>
      theme.buttons[themeStyle].borderColorHover};
  }

  &:focus {
    color: ${({ theme, themeStyle }) => theme.buttons[themeStyle].color};
    background-color: ${({ theme, themeStyle }) =>
      theme.buttons[themeStyle].backgroundColor};
    border-color: ${({ theme, themeStyle }) =>
      theme.buttons[themeStyle].borderColor};
    box-shadow: 0 0 0 0rem rgba(38, 143, 255, 0.5);
  }
`;
ButtonStyled.defaultProps = { theme: defaultTheme };
