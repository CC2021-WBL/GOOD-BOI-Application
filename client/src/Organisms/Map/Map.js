import 'mapbox-gl/dist/mapbox-gl.css';

import propTypes from 'prop-types';
import ReactMap, { Marker, Popup } from 'react-map-gl';
import { useEffect, useState } from 'react';

const initialState = {
  latitude: 51.796,
  longitude: 19.426,
  zoom: 4.5,
};

// const contestsData = [
//   {
//     contestName: 'Zawody Pana Kleksa',
//     latitude: 52.248,
//     longitude: 20.976,
//   },
//   {
//     contestName: 'Mistrzostwa Zjadaczy Kabanosów',
//     latitude: 51.168,
//     longitude: 22.472,
//   },
// ];

const Map = (contestsData = []) => {
  const [viewstate, setViewstate] = useState(initialState);
  const [selectedContest, setSelectedContest] = useState(null);

  console.log(contestsData);
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
      {contestsData &&
        contestsData.length > 0 &&
        contestsData.map((singleContest, index) => (
          <Marker
            key={index}
            latitude={singleContest.latitude}
            longitude={singleContest.longitude}
            anchor="center"
            onClick={() => setSelectedContest(singleContest)}
          ></Marker>
        ))}

      {selectedContest && (
        <Popup
          latitude={selectedContest.latitude}
          longitude={selectedContest.longitude}
          closeOnClick={false}
          onClose={() => setSelectedContest(null)}
        >
          <div>{selectedContest.contestName}</div>
        </Popup>
      )}
    </ReactMap>
  );
};

Map.propTypes = {
  contestsCoordinates: propTypes.array,
};

export default Map;
