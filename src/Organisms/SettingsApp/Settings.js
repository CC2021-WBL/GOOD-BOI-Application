import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import Theme from '../../Molecules/ThemeApp/Theme';
import propTypes from 'prop-types';

// import SettingsPage from '../../PagesBody/SettingsPage/SettingsPage';

const Settings = ({ themeToggler }) => {
  return (
    <ColumnWrapper paddingLeftRight="1.188">
      <Theme themeToggler={themeToggler} />
    </ColumnWrapper>
  );
};
Settings.propTypes = {
  themeToggler: propTypes.func,
};
export default Settings;
