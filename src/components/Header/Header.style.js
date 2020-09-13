import React from 'react';
import styled from 'styled-components';
const Title = styled.h1`
    font-size: 50px;
    text-align: center;
    color: pink;
    letter-spacing: 5px;
`;
function Header(props) {
    return (
        <header>
            <Title>{props.headerText}</Title>
        </header>
    )
}
export default Header;