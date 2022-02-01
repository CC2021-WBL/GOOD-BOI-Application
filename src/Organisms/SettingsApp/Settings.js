import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import Theme from '../../Molecules/ThemeApp/Theme';
import propTypes from 'prop-types';

// import SettingsPage from '../../PagesBody/SettingsPage/SettingsPage';

const Settings = ({ theme, themeToggler }) => {
  return (
    <ColumnWrapper paddingLeftRight="1.188">
      <Theme theme={theme} themeToggler={themeToggler} />
    </ColumnWrapper>
  );
};
Settings.propTypes = {
  themeToggler: propTypes.func,
  theme: propTypes.string,
};
export default Settings;
