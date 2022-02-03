import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ContestDetailsLineStyled = styled.div`
  padding: 0 0.625rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 2rem;
  min-height: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.grey00};
  text-transform: uppercase;
  text-align: right;
  ${(props) => props.highlight && `background-color: ${props.theme.grey100};`};
  ${(props) =>
    props.judge &&
    `${FONTS.label_semibold} padding: 0 0 0 1rem; line-height: 2rem;`};

  div:first-child {
    text-align: left;
    color: ${({ theme }) => theme.grey800};
  }
  div:nth-child(2) {
    color: ${({ theme }) => theme.grey400};
  }
`;

export default ContestDetailsLineStyled;
