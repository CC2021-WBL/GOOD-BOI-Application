import { func } from 'prop-types';
import { useState } from 'react';

const [getAccess, setGetAcces] = useState(false);

function toggleAccess() {
  setGetAcces((prevGetAccess) => !prevGetAccess);
}

export function DataProvider({children})
