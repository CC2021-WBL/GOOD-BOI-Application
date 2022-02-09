import Settings from '../../Organisms/SettingsApp/Settings';
import propTypes from 'prop-types';

const SettingsPage = ({ theme, themeToggler }) => {
  return <Settings theme={theme} themeToggler={themeToggler} />;
};
SettingsPage.propTypes = {
  themeToggler: propTypes.func,
  theme: propTypes.string,
};
export default SettingsPage;
