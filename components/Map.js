import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import Image from 'next/image'


function Map ({ searchResults }) {

  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,

  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  })

  return <ReactMapGL
    mapStyle='mapbox://styles/sandyfirst1010/cl61sfa40006x16mvlcu2z6r0'
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >
    {searchResults.map((result) => (
      <div key={result.long}>
        <Marker
          longitude={result.long}
          latitude={result.lat}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p
            role='img'
            onClick={() => setSelectedLocation(result)}
            className=' cursor-pointer text-2xl animate-bounce'
            aria-label='push-pin'
          >
            📌
          </p>
        </Marker>

        {selectedLocation.long === result.long ? (
          <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}

          >
            <div className='h-20 w-40'>
              <Image src={result.img} layout='fill' />
            </div>
          </Popup>
        ) : (
          false
        )}
      </div>

    ))}

  </ReactMapGL>
}
export default Map