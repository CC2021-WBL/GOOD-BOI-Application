import styled from 'styled-components';
import { COLORS } from '../../Styles/varsStyledComponents';

export const Wrapper = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  align-items: center;
  gap: 5px;

  .arrowLeft {
    color: ${COLORS.grey200};
    font-size: 30px;
  }

  .back {
    font-family: Mulish;
    font-size: 14px;
    color: ${COLORS.grey200};
  }
`;

export const Element = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  .navText {
    color: ${COLORS.grey800};
    width: 33%;
    font-size: 19px;
    font-family: Mulish;
  }
`;

export const Div = styled.div`
  width: 33%;
`;
