import propTypes from 'prop-types';
import { useState } from 'react';
import InfoLabel from '../../Atoms/InButtonLabel/InfoLabel';

const contestComponent = ({ initialName, initialDate, initialCity }) => {
  const [contestName, setContestName] = useState(initialName);
  const [date, setDate] = useSate(initialDate);
  const [city, setCity] = useState(initialCity);

  return (
    <div>
      <p>{contestName}</p>
    </div>
  )
};

export default contestComponent;
