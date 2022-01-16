import SpecialButtons from '../Atoms/SpecialButtons/SpecialButtons';

const SpecialButtonsContainer = () => {
  return (
    <div>
      <SpecialButtons text="Dyskwalifikacja" special />

      <SpecialButtons text="-10 punktów" />
    </div>
  );
};

export default SpecialButtonsContainer;
