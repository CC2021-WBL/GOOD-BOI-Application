import ColumnWrapper from '../Templates/ColumnWrapper/ColumnWrapper';
import { Component } from 'react';
import ErrorPageGraphic from '../../src/Assets/ErrorPageGraphic.png';
import MainButton from '../Atoms/MainButton/MainButton';
import NotFoundPageWrapperStyled from '../Organisms/NotFoundContent/NotFoundPageWrapperStyled';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
          <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
            <NotFoundPageWrapperStyled>
              <img src={ErrorPageGraphic} alt="Doggo in space" />
              <div className="mainContentWrapper">
                <h1>Coś poszło nie tak...</h1>
                <h4>Error: </h4> {this.state.error.toString()} <br />
                <p>Wróć do poprzedniej strony i spróbuj ponownie później.</p>
              </div>
            </NotFoundPageWrapperStyled>
            <MainButton
              secondary
              text="wroć do poprzedniej strony"
              onClick={() => navigate('/userDogs')}
            />
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
