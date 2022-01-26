import ContestDetailsLine from '../../../../Atoms/ContestDetailsLine/ContestDetailsLine';
import PropTypes from 'prop-types';
import { addressTextTemplate } from '../../../../Consts/ContestDetailsCONSTS';

const ContestDetailsAddress = ({ addressInfo }) => {
  const { address, city, place } = addressInfo;
  const addressText = addressTextTemplate;
  address && (addressText[0][0] = address);
  city && (addressText[0][1] = city);
  place && (addressText[1][0] = place);

  return (
    <>
      {addressText.map((addressTextLine, index) => (
        <ContestDetailsLine key={`adress-${index}`} text={addressTextLine} />
      ))}
    </>
  );
};

ContestDetailsAddress.propTypes = {
  addressInfo: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    place: PropTypes.string,
  }),
};

export default ContestDetailsAddress;
