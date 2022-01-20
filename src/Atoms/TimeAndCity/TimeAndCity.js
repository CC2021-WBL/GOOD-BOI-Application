import PropTypes from 'prop-types';

const TimeAndCity = ({ contestData }) => {
  const { date, hour, city } = contestData;
  return (
    <>
      <time dateTime={date}>
        {date}, {hour}
      </time>
      <p>{city}</p>
    </>
  );
};

TimeAndCity.propTypes = {
  contestData: PropTypes.object,
};

export default TimeAndCity;
