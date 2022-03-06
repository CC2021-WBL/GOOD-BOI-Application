import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ContestDetailsLine from '../../../../Atoms/ContestDetailsLine/ContestDetailsLine';
import renderDateAndHourText from '../../../../Tools/contestDetails/renderDateAndHourText';

const ContestDetailsDate = ({ date }) => {
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    date instanceof Date ? setStartDate(date) : setStartDate('no-date');
  }, []);

  return (
    <>
      {startDate && (
        <ContestDetailsLine text={renderDateAndHourText(startDate)} />
      )}
    </>
  );
};

ContestDetailsDate.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default ContestDetailsDate;
