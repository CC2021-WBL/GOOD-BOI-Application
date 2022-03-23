import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ErrorPageGraphic from '../../Assets/ErrorPageGraphic.png';

const ErrorComponent = ({ message }) => {
  return (
    <ColumnWrapper className="error-wrapper">
      <img src={ErrorPageGraphic} alt="Doggo in space" />
      <div className="text-wrapper">
        <h2>{message}</h2>
      </div>
    </ColumnWrapper>
  );
};

export default ErrorComponent;
