import propTypes from 'prop-types';
import styled from 'styled-components';
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
        <BodyWrapper>
          <NotFoundPageWrapperStyled style={{ textAlign: 'center' }}>
            <img src={ErrorPageGraphic} alt="Doggo in space" />
            <div className="text-wrapper">
              <h1>Coś poszło nie tak.</h1>
              <br />
              <p>Wróć do strony głównej i spróbuj ponownie później.</p>
            </div>
            <NavLink className="error-link" onTouchTap={this.refresh} to="/">
              Odśwież stronę!
            </NavLink>
            <NavLink
              className="error-link error-link__contact"
              onClick={this.refresh}
              to="/contact-form"
            >
              Skontaktuj się z nami!
            </NavLink>
          </NotFoundPageWrapperStyled>
        </BodyWrapper>
      );
    }
    return this.props.children;
  }
}

const BodyWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .text-wrapper {
    color: ${({ theme }) => theme.grey800};
  }

  .error-link {
    margin: 1rem;
    width: 100%;
    height: 3.25rem;
    border-radius: 10px;
    text-decoration: none;
    color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    font-size: 0.9375rem;
  }

  .error-link__contact {
    color: ${({ theme }) => theme.white};
    border: 0.5px solid ${({ theme }) => theme.grey800};
    background-color: ${({ theme }) => theme.primary501};
  }
`;

ErrorBoundary.propTypes = {
  children: propTypes.node,
};

export default ErrorBoundary;
