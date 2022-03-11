import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import { Reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Source Sans Pro', sans-serif;
        background-color:${(props) => props.theme.bgColor};
        color:${(props) => props.theme.textColor}
    }
    a {
        text-decoration:none;
        color: inherit;
    }
`;

const App = () => {
    return (
        <>
            <Reset/>
            <GlobalStyle />
            <Router/>
        </>
    );
};

export default App;
