import React from 'react'
import styled from 'styled-components';

import Form from './Form';

export default function Home() {
    return (
        <ContainerHome>
            <h1>Welcome to Weather App</h1>
            <h4>Here you will find all the weather data of any city in the world.</h4>

            <Form/>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
