import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

export default function Header() {
    return (
        <>
            <HeaderTitle>
                <h1><LinkTitle to="/Weather_App">Weather App</LinkTitle></h1>
            </HeaderTitle>
            <div>
                <svg viewBox="0 0 1440 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-32 27.4271L3.06222 28.5628C38.1244 29.7841 108.044 31.9269 178.578 33.1483C248.396 34.2839 318.622 34.2839 388.133 33.1483C458.667 31.9269 529.2 29.7841 598.711 28.5628C668.938 27.4271 738.756 27.4271 809.289 25.1344C879.209 22.9274 949.333 18.2133 1019.87 16.0063C1089.48 13.7136 1159.91 13.7136 1229.42 16.0063C1299.85 18.2133 1369.47 22.9274 1405.24 25.1344L1440 27.4271V0H1404.94C1369.88 0 1299.96 0 1229.42 0C1159.6 0 1089.38 0 1019.87 0C949.333 0 878.8 0 809.289 0C739.062 0 669.244 0 598.711 0C528.791 0 458.667 0 388.133 0C318.52 0 248.089 0 178.578 0C108.147 0 38.5333 0 2.75556 0H-32V27.4271Z" fill="#003049"/>
                </svg>
            </div>
        </>
        
    )
}

const HeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    background-color: #003049;
`;

const LinkTitle = styled(Link)`
    color: #00b894;
    padding-left: 25px;
    text-decoration: overline solid transparent;
    transition: text-decoration .8s ease, color .8s ease;
    &:hover{
        text-decoration: overline solid #00b894;
        color: rgba(0, 184, 148, 0.6);
    }
`;
