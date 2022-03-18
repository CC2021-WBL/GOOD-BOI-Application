import { useEffect, useState } from 'react';

import ContestDetailsLine from '../../../../Atoms/ContestDetailsLine/ContestDetailsLine';
import PropTypes from 'prop-types';
import applicationInfoRender from '../../../../Tools/contestDetails/applicationInfoRender';

const ContestDetailsApplicationInfo = ({ applicationData }) => {
  const [applicationInfo, setApplicationInfo] = useState(null);

  useEffect(() => {
    setApplicationInfo(applicationData);
  }, []);

  return (
    <>
      {applicationInfo &&
        applicationInfoRender(applicationInfo).map(
          (applicationInfoLine, index) => (
            <ContestDetailsLine
              key={`application-info-${index}`}
              text={applicationInfoLine}
              highlight={true}
            />
          ),
        )}
    </>
  );
};

ContestDetailsApplicationInfo.propTypes = {
  applicationData: PropTypes.shape({
    applicationOpenDate: PropTypes.instanceOf(Date),
    applicationClosedDate: PropTypes.instanceOf(Date),
    feePLN: PropTypes.number,
  }),
};

export default ContestDetailsApplicationInfo;
