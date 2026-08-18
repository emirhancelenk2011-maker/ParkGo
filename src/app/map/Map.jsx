'use client'

import React, { useEffect } from 'react'

import 'leaflet/dist/leaflet.css'

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet'

import L from 'leaflet'

import parkingSpots from '../map/parkingSpots'

const ChangeMapView = ({ location }) => {
  const map = useMap()

  useEffect(() => {
    if (!location) return

    map.flyTo(
      [location.lat, location.lng],
      15,
      {
        duration: 1.5,
      }
    )
  }, [location, map])

  return null
}

const parkingIcon = new L.Icon({
  iconUrl: '/parking-icon.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})

const Map = ({ location }) => {
  return (
    <div className="map-section">
      <div className="map-container">

        <MapContainer
          center={[41.2995, 69.2401]}
          zoom={12}
          scrollWheelZoom={true}
          className="parking-map"
        >

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ChangeMapView location={location} />

          {parkingSpots.map((spot) => (
            <Marker
              key={spot.id}
              position={[spot.lat, spot.lng]}
              icon={parkingIcon}
            >
              <Popup>
                <strong>{spot.name}</strong>

                <br />

                {spot.price.toLocaleString()} UZS / hour

                <br />

                {spot.spaces} spaces available
              </Popup>
            </Marker>
          ))}

        </MapContainer>

      </div>
    </div>
  )
}

export default Map