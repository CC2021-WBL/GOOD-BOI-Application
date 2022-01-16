import SpecialButtons from '../Atoms/SpecialButtons/SpecialButtons';

const SpecialButtonsContainer = () => {
  return (
    <div>
      <SpecialButtons text="Dyskwalifikacja" special>
        special
      </SpecialButtons>

      <SpecialButtons text="-10 punktów">special</SpecialButtons>
    </div>
  );
};

export default SpecialButtonsContainer;
