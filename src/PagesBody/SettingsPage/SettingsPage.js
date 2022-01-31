import Settings from '../../Organisms/SettingsApp/Settings';
import propTypes from 'prop-types';

const SettingsPage = ({ themeToggler }) => {
  return <Settings themeToggler={themeToggler} />;
};
SettingsPage.propTypes = {
  themeToggler: propTypes.func,
};
export default SettingsPage;
