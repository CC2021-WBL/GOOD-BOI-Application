import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import Map from '../../Organisms/Map/Map';

const contestsCoordiantes = [
  {
    contestName: 'Zawody Pana Kleksa',
    latitude: 52.248,
    longitude: 20.976,
  },
  {
    contestName: 'Mistrzostwa Zjadaczy Kabanosów',
    latitude: 51.168,
    longitude: 22.472,
  },
];

const UnregisteredPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <h1> I am Unregistered page</h1>
      <Map contestsCoordinates={contestsCoordiantes}></Map>
    </ColumnWrapper>
  );
};

export default UnregisteredPage;
