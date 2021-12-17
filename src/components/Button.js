import styled from "styled-components";
import { defaultTheme, typeScale } from "../utilities";


const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    min-width:120px;
    min-height: 30px;
    cursor: pointer;
    border-radius: 7px;
    border : none;
    font-family: ${typeScale.paragraph};
`;


const PrimaryButton=styled(Button)`
    background-color:${defaultTheme.primaryColor};
    border: none;
    color: white;
    
`;

export const SecondaryButton = styled(Button)`
    background-color:none;
    border: ${defaultTheme.primaryColor} solid 2px;
    color: ${defaultTheme.primaryColor};
`;

export const TertiaryButton=styled(Button)`
    background-color:none;
    border: ${defaultTheme.primaryColor} solid 1px;
    color: ${defaultTheme.primaryColor};
`;

export default PrimaryButton;