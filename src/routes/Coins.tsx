import styled from 'styled-components'

const TItle = styled.h1`
    color: ${props => props.theme.accentColor}
`;

const Coins = () => {
    return <div>
        <TItle>
            Coins
        </TItle>
    </div>;
};

export default Coins;
