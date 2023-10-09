import React from "react"
import styles from './GoogleMapSection.module.scss'
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api"
import nightMapStyle from '../../../nightMapStyle.json'

interface IGoogleMapSectionProps {
    latitude: number
    longitude: number
}

export const GoogleMapSection: React.FC<IGoogleMapSectionProps> = ({ latitude, longitude }) => {

    return (
        <div className={styles.googleMapSection}>
            <LoadScript
                googleMapsApiKey=''
            >
                <GoogleMap
                    mapContainerClassName={styles.googleMapSection__map}
                    center={{ lat: latitude, lng: longitude }}
                    zoom={14}
                    options={{styles: nightMapStyle}}
                >
                    <Marker position={{ lat: latitude, lng: longitude }} />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}