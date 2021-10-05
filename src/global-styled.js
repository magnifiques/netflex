import { createGlobalStyle } from 'styled-components';



export const GlobalStyled = createGlobalStyle`
    html, body {
        height: 100%;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #333333;
        
        font-size: 16px;
}

        a:link{
            color: rgba(255,255,255, 0.8);
            text-decoration: none;
        }

        a:visited {
            color: rgba(255,255,255, 0.4);
            text-decoration: none;
        }

        a:hover {
            color: rgba(255,255,255, 1);
            text-decoration: none;
        }

        a:active{
            color: rgba(255, 255, 255, 1)
        }
`;
