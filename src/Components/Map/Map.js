import React, { useEffect, useRef} from 'react'
import { gsap } from "gsap";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./Map.css"

export default function Map({ dataPosition }) {
    
    const position = [dataPosition.lat, dataPosition.lon]
    const elementAnime= useRef();
    
    const animationSlide = elem => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: 200,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
            }
        )
    }

    useEffect(() => {
        animationSlide(elementAnime.current)
}, [])

    return (
        <div ref={elementAnime}>
            <MapContainer center={position} zoom={11}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                    Hello
                    </Popup>
                </Marker>
            </MapContainer>   
        </div>  
    )
}
