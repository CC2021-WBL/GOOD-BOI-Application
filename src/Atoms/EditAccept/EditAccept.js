import PropTypes from 'prop-types';
import EditAcceptStyled from './EditAcceptStyled';
import { FaRegEdit } from 'react-icons/fa';
import { BiCheckCircle } from 'react-icons/bi';

const EditAccept = ({ onClick, toggle }) => {
  return (
    <EditAcceptStyled onClick={onClick} toggle={toggle}>
      {toggle ? <FaRegEdit size={`1.5em`} /> : <BiCheckCircle size={`1.5em`} />}
      {toggle ? `edycja` : 'zapisz'}
    </EditAcceptStyled>
  );
};

EditAccept.propTypes = {
  points: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  toggle: PropTypes.bool,
};

export default EditAccept;
