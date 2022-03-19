import ReactMap from 'react-map-gl';
import { useState } from 'react';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 54.3611929,
    longitude: 18.6286088,
    zoom: 10,
    width: '100vh',
    height: '100vh',
  });
  return (
    <div>
      {' '}
      <ReactMap
        {...viewport}
        mapboxAccessToken="pk.eyJ1IjoibW9uaWtha3IiLCJhIjoiY2wweTZ6NjYyMXF2bTNpbm1sb2FzYnU1ayJ9.82jjXRoyf1BwTpQkFRmTZw"
      ></ReactMap>
    </div>
  );
};

export default Map;
