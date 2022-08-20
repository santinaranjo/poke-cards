import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
                font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        ul {
                list-style: none;
        }

        button {
                background: transparent;
                border: 0;
                outline: 0;
        }
`

export { GlobalStyle }