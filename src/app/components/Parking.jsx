'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import ParkingSearch from './ParkingSearch'
import '../Parking.css'

const Map = dynamic(
  () => import('../map/Map'),
  {
    ssr: false,
    loading: () => <div className="map-loading">Loading map...</div>
  }
)

const Parking = () => {
  const [location, setLocation] = useState(null)

  return (
    <div>
      <Navbar />

      <Map location={location} />

      <ParkingSearch setLocation={setLocation} />
    </div>
  )
}

export default Parking