'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../Navbar'
import '../Parking.css'

const Map = dynamic(
  () => import('../map/Map'),
  {
    ssr: false,
    loading: () => <div className="map-loading">Loading map...</div>
  }
)

const Parking = () => {
  return (
    <div>
      <Navbar />
      <Map />
    </div>
  )
}

export default Parking