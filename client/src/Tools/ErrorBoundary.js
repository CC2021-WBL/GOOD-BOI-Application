import propTypes from 'prop-types';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ErrorPageGraphic from '../Assets/ErrorPageGraphic.png';
import NotFoundPageWrapperStyled from '../Organisms/NotFoundContent/NotFoundPageWrapperStyled';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '', errorInfo: '' };
  }

  refresh = () => {
    window.location.reload();
  };

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
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
        <>
          <NotFoundPageWrapperStyled style={{ textAlign: 'center' }}>
            <img src={ErrorPageGraphic} alt="Doggo in space" />
            <div className="mainContentWrapper">
              <h1>Coś poszło nie tak.</h1>
              <br />
              <p>Wróć do strony głównej i spróbuj ponownie później.</p>
            </div>
            <NavLink
              style={{
                margin: '1rem',
                width: '100%',
                height: '3.25rem',
                borderRadius: '10px',
                textDecoration: 'none',
                color: 'grey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid grey',
                fontSize: '0.9375rem',
              }}
              onClick={this.refresh}
              to="/"
            >
              Odśwież stronę!
            </NavLink>
          </NotFoundPageWrapperStyled>
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
