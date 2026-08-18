'use client'

import React, { useState } from 'react'
import '../ParkingSearch.css'

const ParkingSearch = ({ setLocation }) => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()

    if (!query.trim()) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query + ', Tashkent, Uzbekistan'
        )}&limit=1`
      )

      const data = await response.json()

      if (!data.length) {
        setError('Location not found')
        return
      }

      const location = data[0]

      setLocation({
        lat: Number(location.lat),
        lng: Number(location.lon),
        name: location.display_name,
      })

    } catch (error) {
      console.error(error)
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="parking-search" onSubmit={handleSearch}>
      <div className="search-input-wrapper">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Where are you going?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <p className="search-error">{error}</p>}
    </form>
  )
}

export default ParkingSearch