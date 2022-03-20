import { TIME } from '../Consts/infoLabelConsts';

export function chooseAndSetSelectedMode(locationPath, setSelectedMode) {
  if (locationPath.state) {
    switch (locationPath.state.contestContent) {
      case 'custom':
        setSelectedMode(TIME.UNKNOWN);
        break;
      case 'results':
        setSelectedMode(TIME.PRESENT_AND_PAST);
        break;
      case 'future':
        setSelectedMode(TIME.FUTURE);
        break;
      default:
        setSelectedMode(TIME.UNKNOWN);
        break;
    }
  } else {
    setSelectedMode(TIME.UNKNOWN);
  }
}
