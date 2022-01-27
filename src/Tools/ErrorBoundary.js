import propTypes from 'prop-types';
import { Component } from 'react';

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
    console.log(error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h4>Error: </h4> {this.state.error.toString()} <br />
          <h4>Error Info: </h4> {this.state.errorInfo.toString()}
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
