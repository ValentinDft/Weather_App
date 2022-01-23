import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./Map.css"

export default function Map({ dataPosition }) {
    
    const position = [dataPosition.lat, dataPosition.lon]

    return (
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
    )
}
