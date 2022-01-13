import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useLocation} from "react-router-dom";

// Images
import Nuit from "../Images/nuit.jpg"
import Jour from "../Images/jour.jpg"

export default function Weather() {

    const { state } = useLocation();
    
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
            
        </ContainerWeather>
    )
}

const ContainerWeather = styled.div`
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
`;

const CardCity = styled.div`
    background-color: ${props => props.time ? `#36685C` : `#0C070B`};
    color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    height: 285px;
`;
