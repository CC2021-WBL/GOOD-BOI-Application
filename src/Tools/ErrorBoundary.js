import { Component } from 'react';
import ErrorPage from '../PagesBody/ErrorPage/ErrorPage';
import propTypes from 'prop-types';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '', errorInfo: '' };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <ErrorPage />
          <h4>Error: </h4> {this.state.error.toString()} <br />
          {/* <h4>Error Info: </h4> {this.state.errorInfo.componentStack} */}
        </>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.node,
};

export default ErrorBoundary;
