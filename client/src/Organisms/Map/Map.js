import 'mapbox-gl/dist/mapbox-gl.css';

import ReactMap from 'react-map-gl';
import { useState } from 'react';

const Map = () => {
  const [viewstate, setViewstate] = useState({
    latitude: 54.3611929,
    longitude: 18.62,
    zoom: 20,
  });
  return (
    <ReactMap
      initialViewState={{
        latitude: 51.796,
        longitude: 19.426,
        zoom: 4.5,
      }}
      style={{
        width: 380,
        height: 420,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoibW9uaWtha3IiLCJhIjoiY2wweTZ6NjYyMXF2bTNpbm1sb2FzYnU1ayJ9.82jjXRoyf1BwTpQkFRmTZw"
    ></ReactMap>
  );
};

export default Map;
