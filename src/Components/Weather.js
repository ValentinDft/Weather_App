import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

// Images
import Nuage from "../Images/nuage.png"
import Soleil from "../Images/soleil.png"
import Pluie from "../Images/pluie.png"
import Nuit from "../Images/nuit.jpg"
import Jour from "../Images/jour.jpg"

export default function Weather() {

    const [dayOrNight, setDayOrNitght] = useState(null)
    const date = new Date((1641478177*1000)+(10800*1000))
    const time = date.getUTCMinutes()
    
    useEffect(() => {
        if (time >= 7 && time <= 18) {
            setDayOrNitght(true)
        } else {
            setDayOrNitght(false)
        }
    }, [])

    return (
        <ContainerWeather>
            <CardCity time={dayOrNight}>
                <ContainerTemp time={dayOrNight}>
                    <p>22°C / 25°C</p>
                    {/* Mettre icons openweathermap */}
                    <img src={Nuage} style={{width: "40px", height: "35px"}}/>
                    {dayOrNight ? <p>Day</p> : <p>Night</p>}
                </ContainerTemp>
                

                <Background time={dayOrNight}></Background>
                
                <p>Los Angeles</p>
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
