import { useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import Map from '../../Organisms/Map/Map';

const mapSize = {
  width: 380,
  height: 420,
};

const UnregisteredPage = () => {
  const [contestData, setContestData] = useState([]);

  useEffect(() => {
    async function fetchContestWithCoords() {
      let response = await fetch(`api/contests/6239f34d8cab9448a7212773`);
      response = await response.json();
      const neededData = [
        {
          _id: response._id,
          contestName: response.contestName,
          latitude: response.coordinates.latitude,
          longitude: response.coordinates.longitude,
        },
      ];
      setContestData(neededData);
    }

    fetchContestWithCoords();
  });
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1> I am Unregistered page</h1>
      <Map contestsDataArr={contestData} mapSizeObj={mapSize}></Map>
    </ColumnWrapper>
  );
};

export default UnregisteredPage;
