import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

const App = () => {
    return (
        <div>
            <Container>
                <H1>하하하</H1>
            </Container>
        </div>
    );
};

export default App;
