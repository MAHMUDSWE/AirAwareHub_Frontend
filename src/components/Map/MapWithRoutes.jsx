import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import AirQualityDetails from '../aqi/AirQualityDetails';

import customIconPathRed from '../../assets/redMapIcon.png';
import customIconPathBlue from '../../assets/blueMapIcon.png';

function MapWithRoutes({ mapData }) {

    const redMapIcon = L.icon({
        iconUrl: customIconPathRed,
        iconSize: [30, 30],
    });

    const blueMapIcon = L.icon({
        iconUrl: customIconPathBlue,
        iconSize: [30, 30],
    });

    const swappedMapData = mapData.map(city => ({
        ...city,
        coordinates: [city.coordinates[1], city.coordinates[0]]
    }));
    console.log(swappedMapData)
    return (
        <div className="flex items-center justify-center w-[700px] h-[600px]">
            <MapContainer
                center={swappedMapData[0]?.coordinates}
                zoom={13}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {
                    swappedMapData.map((city, index) => (
                        <Marker
                            key={index}
                            icon={city.pollution.aqius >= 150 ? redMapIcon : blueMapIcon}
                            position={city.coordinates}
                        >
                            <Popup>
                                <AirQualityDetails airqualitydata={city} />
                            </Popup>
                        </Marker>
                    ))
                }

            </MapContainer>
        </div>
    );
}

export default MapWithRoutes;