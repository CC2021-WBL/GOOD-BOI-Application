import { useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import contests from '../../Data/MongoDBMock/contests';

const ContestsPage = () => {
  const [contestsId, setState] = useState([]);

  useEffect(() => {
    let array = [];
    contests.forEach((element) => {
      const id = element.contestId;
      array.push(id);
    });
    setState(array);
  }, []);
  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
      {contestsId.map((id, index) => (
        <ContestCard key={index} competitonId={id} />
      ))}
    </ColumnWrapper>
  );
};

export default ContestsPage;
