import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet CSS
import 'leaflet/dist/images/marker-icon.png'; // Fix for marker icon
import 'leaflet/dist/images/marker-shadow.png'; // Fix for marker shadow
import MapWithRoutes from '../components/Map/MapWithRoutes';
import Navbar from '../components/nav/navbar';
import mapService from '../services/map.service';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';



export default function MapView() {
    const [mapData, setMapData] = useState([]);

    const { data, isError } = useQuery({
        enabled: true,
        queryKey: ['isFetching', 'getMapData'],
        queryFn: async () => await mapService.getMapData(),
        staleTime: 15000
    });
    useEffect(() => {
        if (data) {
            console.log(data);
            setMapData(data);
        }
    }, [data]);
    useEffect(() => {
        if (isError) {
            toast.error('Something went wrong!');
        }
    }, [isError]);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen">
                <div className=' mb-3'>
                    {mapData?.length > 0 && <MapWithRoutes mapData={mapData} />}
                </div>
            </div>
        </>
    );
}