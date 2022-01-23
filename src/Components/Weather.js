import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

// React router
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// Images
import Nuit from "../Images/nuit.jpg"
import Jour from "../Images/jour.jpg"

// Icons
import { IoArrowBackCircleOutline } from "react-icons/io5";

import Map from './Map/Map';

export default function Weather() {

    // React Router
    const { state } = useLocation();
    const navigate = useNavigate();
    
    const [dayOrNight, setDayOrNitght] = useState(null)
    // const [dataWeather, setDataWeather] = useState({})
    const date = new Date((state.dt*1000)+(state.timezone*1000))
    const time = date.getUTCHours();
    
    useEffect(() => {
        // setDataWeather({...state})
        if (time >= 7 && time <= 18) {
            setDayOrNitght(true)
        } else {
            setDayOrNitght(false)
        }
    }, [])

    let weatherIcon = `http://openweathermap.org/img/w/${state.weather[0].icon}.png`
    
    return (
        <>
            <IconBack onClick={() => navigate(-1)}/>
        
            <ContainerWeather>
                <CardCity time={dayOrNight}>
                    <ContainerTemp time={dayOrNight}>
                        <p>{state.main.temp_min}°C / {state.main.temp_max}°C</p>
                        <img src={weatherIcon} style={{width: "40px", height: "35px"}}/>
                        {dayOrNight ? <p>Day</p> : <p>Night</p>}
                    </ContainerTemp>
                    

                    <Background time={dayOrNight}></Background>
                    
                    <p>{state.name}</p>
                </CardCity>

                <Map dataPosition={state.coord}/>
            </ContainerWeather>

        </>
    )
}

const IconBack = styled(IoArrowBackCircleOutline)`
    font-size: 40px;
    color: #00B894;
    cursor: pointer;
    margin-left: 20px;
    transition: transform .8s ease, color .8s ease;
    &:hover{
        transform: scale(0.9);
        color: #003049;
    }
`;

const ContainerWeather = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 4%;
    @media (max-width: 850px) {
        flex-direction: column;
    }
`;

const CardCity = styled.div`
    width: 25vw;
    background-color: ${props => props.time ? `#36685C` : `#0C070B`};
    color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 850px) {
        margin-bottom: 3%;
        width: 40vw;
    }
    @media (max-width: 450px) {
        width: 60vw;
    }
`;

const ContainerTemp = styled.div`
    background-color: ${props => props.time ? `#BFE1D0` : `#A77668`};
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 50px;
`;

const Background = styled.div`
    background: url(${props => props.time ? `${Jour}` : `${Nuit}`});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 300px;
`;
