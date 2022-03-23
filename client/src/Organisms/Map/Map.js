import 'mapbox-gl/dist/mapbox-gl.css';

import propTypes from 'prop-types';
import ReactMap, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';

const initialState = {
  latitude: 51.796,
  longitude: 19.426,
  zoom: 4.5,
};

const Map = ({ contestsDataArr, mapSizeObj }) => {
  const [viewstate, setViewstate] = useState(initialState);
  const [selectedContest, setSelectedContest] = useState(null);

  return (
    <ReactMap
      {...viewstate}
      style={mapSizeObj}
      onMove={(evt) => setViewstate(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={
        'pk.eyJ1IjoibW9uaWtha3IiLCJhIjoiY2wweTZ6NjYyMXF2bTNpbm1sb2FzYnU1ayJ9.82jjXRoyf1BwTpQkFRmTZw'
      }
    >
      {contestsDataArr &&
        contestsDataArr.length > 0 &&
        contestsDataArr.map((singleContest) => (
          <Marker
            key={singleContest._id}
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
  contestsDataArr: propTypes.array,
  mapSizeObj: propTypes.shape({
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
  }),
};

export default Map;
