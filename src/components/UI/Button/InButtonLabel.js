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
    ${LabelData => LabelData.children[0] === LabelData.children[2]  ? `background: #97E3B3; color: #1A6234;  border: solid 1px #1A6234;` : `background: transparent`};

`;


const InButtonLabel = (props) => {
    const { type, contestantsAmount, exercisesCompleted, exercisesAmount} = props;
if (type === 'class') {
    return <LabelWrapper>
        {contestantsAmount} {contestantsAmount==='1' ? `uczestnik` : `uczestników`}
    </LabelWrapper>
} else {
    return <LabelWrapper>
        {exercisesCompleted}/{exercisesAmount} {`ćwiczeń`}
    </LabelWrapper>
}
};

export default InButtonLabel;
