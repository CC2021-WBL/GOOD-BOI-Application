import ComponentWithErrors from './ComponentWithErrors';
import ErrorBoundary from '../../Tools/ErrorBoundary';

const ErrorTestPage = () => {
  return (
    <>
      <ErrorBoundary>
        <div style={{ height: '80px' }}></div>
        <ComponentWithErrors />
      </ErrorBoundary>
    </>
  );
};

export default ErrorTestPage;
