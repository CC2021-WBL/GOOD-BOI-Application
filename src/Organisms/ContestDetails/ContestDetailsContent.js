import ContestDetailsContentStyled from './ContestDetailsContentStyled';
import ContestDetailsLine from './ContestDetailsLine';

const ContestDetailsContent = () => {
  return (
    <ContestDetailsContentStyled>
      <ContestDetailsLine textArray={['21 MARCA 2020', '10:00']} />
      <ContestDetailsLine textArray={['UL. GRUNWALDZKA 402', 'GDAŃSK']} />
      <ContestDetailsLine textArray={['OLIVIA BUSINESS CENTER']} />
      <ContestDetailsLine textArray={['SKŁAD SĘDZIOWSKI:']} />
      <ContestDetailsLine textArray={['NATASZA URBAŃSKA']} judge={true} />
      <ContestDetailsLine textArray={['MICHAŁ MILOWICZ']} judge={true} />
      <ContestDetailsLine
        textArray={['OTWARCIE ZGŁOSZEŃ', '10.01.2022']}
        highlight={true}
      />
      <ContestDetailsLine
        textArray={['ZGŁOSZENIA DO', '20.02.2022']}
        highlight={true}
      />
      <ContestDetailsLine
        textArray={['OPŁATA WPISOWA', '70 ZŁ']}
        highlight={true}
      />
    </ContestDetailsContentStyled>
  );
};

export default ContestDetailsContent;
