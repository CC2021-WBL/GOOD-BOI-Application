import propTypes from 'prop-types';
import { Component } from 'react';

import ErrorBoundaryStyled from './ErrorBoundaryStyled';
import ErrorPageGraphic from '../../Assets/ErrorPageGraphic.png';
import NotFoundPageWrapperStyled from '../../Organisms/NotFoundContent/NotFoundPageWrapperStyled';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '', errorInfo: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryStyled>
          <NotFoundPageWrapperStyled style={{ textAlign: 'center' }}>
            <img src={ErrorPageGraphic} alt="Doggo in space" />
            <div className="text-wrapper">
              <h1>Coś poszło nie tak.</h1>
              <p>Wróć do strony głównej lub spróbuj ponownie później.</p>
            </div>
            <a
              className="error-link"
              href="/"
              onClick={() => {
                window.location.reload();
              }}
            >
              Wróc do strony głównej!
            </a>
            <a
              className="error-link error-link__contact"
              href="/contact-form"
              onClick={() => {
                window.location.reload();
              }}
            >
              Skontaktuj się z nami!
            </a>
          </NotFoundPageWrapperStyled>
        </ErrorBoundaryStyled>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.node,
};

export default ErrorBoundary;
