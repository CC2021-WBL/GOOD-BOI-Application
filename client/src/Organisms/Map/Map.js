import 'mapbox-gl/dist/mapbox-gl.css';

import ReactMap, { Marker, Popup } from 'react-map-gl';

import propTypes from 'prop-types';
import { useState } from 'react';

const initialState = {
  latitude: 51.796,
  longitude: 19.426,
  zoom: 4.5,
};

const Map = () => {
  const [viewstate, setViewstate] = useState(initialState);
  const [selectedContest, setSelectedContest] = useState(null);
  const contestsData = [
    {
      latitude: 52.248,
      longitude: 20.976,
    },
    {
      latitude: 51.168,
      longitude: 22.472,
    },
  ];

  const onMarkerClick = (event, singleContest) => {
    console.log('clicked');
    event.preventDefault();
    setSelectedContest(singleContest);
  };

  return (
    <ReactMap
      {...viewstate}
      style={{
        width: 380,
        height: 420,
      }}
      onMove={(evt) => setViewstate(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={
        'pk.eyJ1IjoibW9uaWtha3IiLCJhIjoiY2wweTZ6NjYyMXF2bTNpbm1sb2FzYnU1ayJ9.82jjXRoyf1BwTpQkFRmTZw'
      }
    >
      {contestsData.map((singleContest, index) => (
        <Marker
          key={index}
          latitude={singleContest.latitude}
          longitude={singleContest.longitude}
          onClick={(event, singleContest) => {
            onMarkerClick(event, singleContest);
          }}
        ></Marker>
      ))}

      {selectedContest && (
        <Popup
          latitude={selectedContest.latitude}
          longitude={selectedContest.longitude}
        >
          <div>Tu są zawody</div>
        </Popup>
      )}
    </ReactMap>
  );
};

Map.propTypes = {
  contestsCoordinates: propTypes.array,
};

// propTypes.oneOfType([propTypes.array, propTypes.object])

export default Map;
