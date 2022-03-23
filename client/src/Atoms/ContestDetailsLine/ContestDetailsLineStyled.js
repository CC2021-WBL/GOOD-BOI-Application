import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ContestDetailsLineStyled = styled.div`
  display: flex;
  min-height: 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.625rem;
  border-bottom: 1px solid ${({ theme }) => theme.grey00};
  line-height: 2rem;
  ${(props) => props.highlight && `background-color: ${props.theme.grey100};`};
  ${(props) =>
    props.judge &&
    `${FONTS.label_semibold} padding: 0 0 0 1rem; line-height: 2rem;`};
  text-align: right;
  text-transform: uppercase;

  div:first-child {
    color: ${({ theme }) => theme.grey800};
    text-align: left;
  }
  div:nth-child(2) {
    color: ${({ theme }) => theme.grey400};
  }

  @media only screen and (min-width: 1024px) {
    line-height: 2.5rem;
  }
`;

export default ContestDetailsLineStyled;
