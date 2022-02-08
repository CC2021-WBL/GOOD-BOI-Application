import {getSelectedContestsByTime} from '../Tools/TimeFunctions'

const ACTIONS = {
  SET: 'SET',
  SELECT_FUTURE: 'SELECT_FUTURE',
  SELECT_PAST: 'SELECT_PAST',
  SELECT_PRESENT: 'SELECT_PRESENT',
  SELECT_WITHOUT_FUTURE: 'SELECT_WITHOUT_FUTURE',
};

const contestPageReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET:
      return action.payload,
    case ACTIONS.SELECT_FUTURE:
      return {
        getSelectedContestsByTime()
      }
  }
};

export default contestPageReducer;
