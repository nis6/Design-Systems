import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html{
        font-size: 16px;
        box-sizing: border-box;
        margin: 1rem;
    }

    *, *:before, *:after{
        box-sizing: inherit;
    }
    body{
        margin: 0;
        font-family: ${primaryFont};
        display: flex;
        flex-direction:column;
        align-items: center;
    }
    main{
        width: 90%;
        margin: 0 auto;
    }
`;
