import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {Container} from "react-bootstrap";

const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 59.334591,
    lng: 18.063240
};

let LocationMap = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <Container className={'bg-light pt-4'}>
            <h3 className={'pt-2 pb-2'}>See Our Location</h3>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <></>
            </GoogleMap>
        </Container>
    ) : <></>
}

export default React.memo(LocationMap)

