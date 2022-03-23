import ErrorPageGraphic from '../../Assets/ErrorPageGraphic.png';

const ErrorPage = ({ message }) => {
  return (
    <>
      <img src={ErrorPageGraphic} alt="Doggo in space" />
      <div className="text-wrapper">
        <h1>{message}</h1>
      </div>
    </>
  );
};

export default ErrorPage;
