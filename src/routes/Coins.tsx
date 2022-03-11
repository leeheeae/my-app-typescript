import { Link } from 'react-router-dom'
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

const CoinsList = styled.ul`
    margin-top: 20px;
`;

const Coin = styled.li`
    background-color: #fff;
    color: ${(props) => props.theme.bgColor};
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    a {
        transition: color 0.5s ease-in;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center
`;


interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

const Coins = () => {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => { 
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    }, [])


    return (
    <Container>
        <Header>
            <Title>코인</Title>
        </Header>
        {loading ? 
            (
                <Loader>Loading...</Loader>
            ): ( 
            <CoinsList>
                {coins.map(coin => 
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
                    </Coin>)
                }
            </CoinsList>)
        }
       
    </Container>);
};

export default Coins;
