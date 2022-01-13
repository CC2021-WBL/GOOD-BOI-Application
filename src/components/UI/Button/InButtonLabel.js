import styled from "styled-components";

const LabelWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.375rem ;
    height: 1.25rem;
    font-family: 'Mulish', sans-serif;
    font-size: 0.7em;
    font-style: normal;
    font-weight: 400;
    border: solid 1px #323F4B;
    border-radius: 0.25rem;
    line-height: 1em;
`;


const InButtonLabel = (props) => {
    const { type, contestantsAmount, exercisesCompleted, exercisesAmount} = props;
    return <LabelWrapper>
        { type === 'class' && <>{contestantsAmount} {contestantsAmount==='1' ? `uczestnik` : `uczestników`}</> }
        { type === 'competitor' && <>{exercisesCompleted}/{exercisesAmount} ćwiczeń</> }
    </LabelWrapper>

};

export default InButtonLabel;
