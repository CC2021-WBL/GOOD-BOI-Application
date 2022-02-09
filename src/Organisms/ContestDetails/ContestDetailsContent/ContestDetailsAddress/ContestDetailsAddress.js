import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ContestDetailsLine from '../../../../Atoms/ContestDetailsLine/ContestDetailsLine';
import renderAddressText from '../../../../Tools/contestDetails/renderAddressText';

const ContestDetailsAddress = ({ addressInfo }) => {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    setAddress(addressInfo);
  }, []);

  return (
    <>
      {address &&
        renderAddressText(address).map((addressTextLine, index) => (
          <ContestDetailsLine key={`adress-${index}`} text={addressTextLine} />
        ))}
    </>
  );
};

ContestDetailsAddress.propTypes = {
  addressInfo: PropTypes.shape({
    street: PropTypes.string,
    numberOfHouse: PropTypes.string,
    city: PropTypes.string,
  }),
};

export default ContestDetailsAddress;
