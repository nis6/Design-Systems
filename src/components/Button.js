import styled from "styled-components";
import { typeScale } from "../utilities";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: (props) => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
  large: (props) => `
        font-size: ${typeScale.h5};
        padding: 16px 24px; 
    `,
  warning: (props) => `
        background-color: ${props.theme.status.warningColor};
        color: ${props.theme.textColorInverted}
        border-color:  ${props.theme.status.warningColor};

        &:hover, &:focus {
            background-color: ${props.theme.status.warningColorHover};
            outline: 3px solid ${props.theme.status.warningColorHover};
            outline-offset: 2px;
            border: 2px solid transparent;
        }
        &:active {
            background-color: ${props.theme.status.warningColorActive}
        }

    `,
};

const Button = styled.button`
  padding: 10px 20px;
  margin: 1rem;
  font-size: 1rem;
  min-width: 120px;
  min-height: 30px;
  cursor: pointer;
  border-radius: 7px;
  border: none;
  font-family: ${typeScale.paragraph};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: white;

  &:focus {
    outline: ${(props) => props.theme.primaryColor} solid 2px;
    outline-offset: 2px;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: none;
  border: ${(props) => props.theme.primaryColor} solid 2px;
  color: ${(props) => props.theme.primaryColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background-color: none;
  border: ${(props) => props.theme.primaryColor} solid 1px;
  color: ${(props) => props.theme.primaryColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
