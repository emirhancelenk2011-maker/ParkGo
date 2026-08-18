'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Map from '../map/Map'
import ParkingSearch from './ParkingSearch'
import '../Parking.css'

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