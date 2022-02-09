import propTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import ColumnWrapper from '../Templates/ColumnWrapper/ColumnWrapper';
import ErrorPageGraphic from '../../src/Assets/ErrorPageGraphic.png';
import MainButton from '../Atoms/MainButton/MainButton';
import NotFoundPageWrapperStyled from '../Organisms/NotFoundContent/NotFoundPageWrapperStyled';

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
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
            <NotFoundPageWrapperStyled>
              <img src={ErrorPageGraphic} alt="Doggo in space" />
              <div className="mainContentWrapper">
                <h1>Coś poszło nie tak.</h1>
                <br />
                <p>Wróć do strony głównej i spróbuj ponownie później.</p>
              </div>
            </NotFoundPageWrapperStyled>
            <Link to="/">
              <MainButton secondary text="wroć do poprzedniej strony" />
            </Link>
          </ColumnWrapper>
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
