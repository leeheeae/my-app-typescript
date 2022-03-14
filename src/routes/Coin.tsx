import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
    padding: 20px;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center
`;


interface RouterState {
    name: string;
}


const Coin = () => {
    const [loading, setLoading] = useState(true);
    const { coinId } = useParams();
    const location = useLocation();
    const { name } = location.state as RouterState;
    
    return (
        <Container>
            <Header>
                <Title>{name? name : '로딩'}</Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : null}
        </Container>
    );
};

export default Coin;
