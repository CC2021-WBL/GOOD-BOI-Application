import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import CheckBoxFormInnerWrapperStyled from '../../Molecules/CheckBoxFormWrapper/CheckBoxFormInnerWrapperStyled';
import CheckBoxFormOuterWrapperStyled from './../../Molecules/CheckBoxFormWrapper/CheckBoxFormOuterWrapperStyled';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestFormHeader from './ContestFormHeader';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import InputLabel from '../../Atoms/InputLabel/InputLabel';
import MainButton from '../../Atoms/MainButton/MainButton';
import SelectFieldStyled from '../../Atoms/SelectField/SelectFieldStyled';
import { UserDataContext } from '../../Context/UserDataContext';
import { genRequestOptionsPOST } from '../../Tools/FetchData/requestOptions';

const ContestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const [data, setData] = useState('');
  const [amountOfJudges, setAmountOfJudges] = useState(0);
  const [judgesArray, setJudgesArray] = useState([]);
  const [chosenClasses, setChosenClasses] = useState([]);
  const [redBorder, setRedBorder] = useState('');
  const params = useParams();
  const { state } = useContext(UserDataContext);

  let managerId = state.userId;
  if (!managerId) {
    managerId = params.userId;
  }

  useEffect(() => {
    setJudgesArray([...Array(amountOfJudges).keys()]);
  }, [amountOfJudges]);

  useEffect(() => {
    chosenClasses.length > 0 && setRedBorder('');
  }, [chosenClasses]);

  const handleAmountOfJudges = (event) => {
    setAmountOfJudges(Number(event.target.value));
  };

  const handleChange = (e) => {
    const checked = e.target.checked;
    const id = e.target.dataset.id;
    checked
      ? setChosenClasses((oldArray) => [...oldArray, Number(id)])
      : setChosenClasses(
          chosenClasses.filter(
            (classNumber) => Number(classNumber) !== Number(id),
          ),
        );
  };

  return (
    <ColumnWrapper
      paddingLeftRight={3}
      paddingTop={1}
      paddingBottom={1}
      maxWidthBigScreen={35}
      className="form-wrapper grid-position"
    >
      <ContestFormHeader />
      <FormWrapper
        onSubmit={handleSubmit(async (data) => {
          data.obedienceClasses = chosenClasses;
          console.log(data);
          setData(JSON.stringify(data));
          try {
            const response = await fetch(
              `/api/contests/register/${managerId}`,
              genRequestOptionsPOST(data),
            );
            const result = await response.json();
            // to decide how handle when success
          } catch (error) {
            console.log(error);
            //to decide how handle when error
          }
        })}
      >
        <InputField
          labelText="Nazwa zawodów"
          htmlFor="contestName"
          id="contestName"
          type="text"
          placeholder="&#xf091; Nazwa zawodów"
          className={errors.contestName ? 'red-border' : ''}
          {...register('contestName', {
            required: 'Wpisz prawidłową nazwę konkursu',
            minLength: {
              value: 5,
              message: 'Wpisz prawidłową nazwę zawodów, min. 5 znaków',
            },
            maxLength: {
              value: 100,
              message: 'Wpisz prawidłową nazwę zawodów, max. 100 znaków',
            },
          })}
        />
        {errors.contestName && <p>{errors.contestName.message}</p>}
        <InputField
          labelText="Oddział ZKwP:"
          htmlFor="kennelClubDepartment"
          id="kennelClubDepartment"
          type="text"
          placeholder="&#xf015; Oddział ZKwP"
          className={errors.kennelClubDepartment ? 'red-border' : ''}
          {...register('kennelClubDepartment', {
            required: 'Wpisz oddział ZKwP',
            minLength: {
              value: 5,
              message: 'Wpisz prawidłowy oddział ZKwP, min. 5 znaków',
            },
          })}
        />
        {errors.kennelClubDepartment && (
          <p>{errors.kennelClubDepartment.message}</p>
        )}
        <InputField
          labelText="Data rozpoczęcia zawodów"
          htmlFor="startDate"
          id="startDate"
          type="date"
          placeholder="&#xF007; Data rozpoczęcia zawodów"
          className={errors.startDate ? 'red-border' : ''}
          {...register('startDate', {
            required: 'Wybierz datę rozpoczęcia zawodów',
          })}
        />
        {errors.startDate && <p>{errors.startDate.message}</p>}
        <InputField
          labelText="Data zakończenia zawodów"
          htmlFor="endDate"
          id="endDate"
          type="date"
          placeholder="&#xF007; Data zakończenia zawodów"
          className={errors.endDate ? 'red-border' : ''}
          {...register('endDate', {
            required: 'Wybierz datę zakończenia zawodów',
          })}
        />
        {errors.endDate && <p>{errors.endDate.message}</p>}
        <InputField
          labelText="Data otwarcia zgłoszeń"
          htmlFor="applicationOpenDate"
          id="applicationOpenDate"
          type="date"
          placeholder="&#xF007; Data otwarcia zgłoszeń"
          className={errors.applicationOpenDate ? 'red-border' : ''}
          {...register('applicationOpenDate', {
            required: 'Wybierz datę otwarcia zgłoszeń',
          })}
        />
        {errors.applicationOpenDate && (
          <p>{errors.applicationOpenDate.message}</p>
        )}
        <InputField
          labelText="Data zamknięcia zgłoszeń"
          htmlFor="applicationClosedDate"
          id="applicationClosedDate"
          type="date"
          placeholder="&#xF007; Data zamknięcia zgłoszeń"
          className={errors.applicationClosedDate ? 'red-border' : ''}
          {...register('applicationClosedDate', {
            required: 'Wybierz datę zamknięcia zgłoszeń',
          })}
        />
        {errors.applicationClosedDate && (
          <p>{errors.applicationClosedDate.message}</p>
        )}
        <InputField
          labelText="Adres zawodów - kraj"
          htmlFor="country"
          id="country"
          type="text"
          placeholder="&#xf015; Adres zawodów - kraj"
          className={errors.country ? 'red-border' : ''}
          {...register('address.country', {
            required: 'Wpisz kraj w którym odbywają się zawody',
            min: 5,
            maxLength: 99,
          })}
        />
        {errors.country && <p>{errors.country.message}</p>}
        <InputField
          labelText="Adres zawodów - miasto"
          htmlFor="city"
          id="city"
          type="text"
          placeholder="&#xf015; Adres zawodów - miasto"
          className={errors.city ? 'red-border' : ''}
          {...register('address.city', {
            required: 'Wpisz miasto, w którym odbywają się zawody',
            min: 5,
          })}
        />
        {errors.city && <p>{errors.city.message}</p>}
        {/* ==================================================== */}
        <InputField
          labelText="Adres zawodów - ulica"
          htmlFor="street"
          id="street"
          type="text"
          placeholder="&#xf015; Adres zawodów - ulica"
          className={errors.street ? 'red-border' : ''}
          {...register('address.street', {
            required: 'Wpisz ulicę, na której odbywają się zawody',
            min: 5,
          })}
        />
        {errors.street && <p>{errors.street.message}</p>}
        {/* ==================================================== */}
        <InputField
          labelText="Adres zawodów - numer obiektu"
          htmlFor="numberOfHouse"
          id="numberOfHouse"
          type="number"
          placeholder="&#xf015; Adres zawodów - numer obiektu"
          className={errors.number ? 'red-border' : ''}
          {...register('address.numberOfHouse', {
            required: 'Podaj numer obiektu (1 - 2000)',
            max: 2000,
            min: 1,
          })}
        />
        {errors.number && <p>{errors.number.message}</p>}
        {errors.number &&
          (errors.number.type === 'max' || errors.number.type === 'min') && (
            <p>Podaj liczbę z zakresu 1-1000 </p>
          )}
        <InputField
          labelText="Adres zawodów - kod pocztowy"
          htmlFor="postalCode"
          id="postalCode"
          type="text"
          pattern="^\d{2}-\d{3}$"
          placeholder="&#xf015;; Adres zawodów - kod pocztowy"
          className={errors.code ? 'red-border' : ''}
          {...register('address.postalCode', {
            required: 'Podaj kod pocztowy w formacie XX-XXX',
          })}
        />
        {errors.code && <p>{errors.code.message}</p>}
        <InputLabel labelText="Wybierz ilość sędziów" htmlFor="judges" />
        <SelectFieldStyled
          value={amountOfJudges}
          onChange={handleAmountOfJudges}
          htmlFor="judges"
          id="judges"
          placeholder="&#xF007; Wybierz ilość sędziów"
        >
          <option value="0" defaultValue>
            Wybierz ilość sędziów
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </SelectFieldStyled>
        {amountOfJudges > 0 &&
          judgesArray.map((judge, index) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0 1rem',
                }}
                key={index}
              >
                <InputField
                  key={index}
                  labelText={`Sędzia ${judge + 1}`}
                  htmlFor={`judge${judge + 1}`}
                  id={`judge${judge + 1}`}
                  type="text"
                  placeholder={`Sędzia ${judge + 1}`}
                  className={errors[`judge${judge + 1}`] ? 'red-border' : ''}
                  {...register(`judges[${index}]`, {
                    required: 'Wpisz imię i nazwisko sędziego',
                    maxLength: 100,
                  })}
                />
                {errors[`judge${judge}`] && (
                  <p>
                    {errors[`judge${judge}`].message} {judge}
                  </p>
                )}
              </div>
            );
          })}
        <InputField
          labelText="Komisarz"
          htmlFor="steward"
          id="steward"
          type="text"
          placeholder="&#xF007; Komisarz"
          className={errors.komisarz ? 'red-border' : ''}
          {...register('steward', {
            required: 'Wpisz imię i nazwisko komisarza',
            min: 3,
            maxLength: 100,
          })}
        />
        {errors.komisarz && <p>{errors.komisarz.message}</p>}
        <InputField
          labelText="Opłata startowa [PLN]"
          htmlFor="feePLN"
          id="feePLN"
          type="number"
          placeholder="&#xf0d6; Opłata startowa [PLN]"
          className={errors.feePLN ? 'red-border' : ''}
          {...register('feePLN', {
            required: 'Podaj opłatę startową w PLN',
            max: 1000,
            min: 1,
          })}
        />
        {errors.feePLN && <p>{errors.feePLN.message}</p>}
        {errors.feePLN &&
          (errors.feePLN.type === 'max' || errors.feePLN.type === 'min') && (
            <p>Podaj liczbę z zakresu 1-1000 </p>
          )}
        <InputField
          labelText="Maksymalna liczba zawodników"
          htmlFor="maxAmountOfApplications"
          id="maxAmountOfApplications"
          type="number"
          placeholder="&#xF007; Maksymalna liczba zawodników"
          className={errors.maxAmountOfApplications ? 'red-border' : ''}
          {...register('maxAmountOfApplications', {
            required: 'Podaj maksymalną liczbę zawodników',
            max: 100,
            min: 1,
          })}
        />
        {errors.maxAmountOfApplications && (
          <p>{errors.maxAmountOfApplications.message}</p>
        )}
        {errors.maxAmountOfApplications && <p>Podaj liczbę z zakresu 1-100 </p>}
        <InputLabel labelText="Wybierz planowane klasy" htmlFor="checkboxy" />

        <CheckBoxFormOuterWrapperStyled
          className={`${redBorder}`}
          // className={chosenClasses.length === 0 ? `red-border` : ''}
        >
          <CheckBoxFormInnerWrapperStyled>
            <div className="checkBoxItem">
              <input
                name="checkbox0"
                id="class0"
                data-id="0"
                type="checkbox"
                value="Klasa 0"
                onChange={handleChange}
              />
              <label htmlFor="class0">Klasa 0</label>
            </div>
            <div className="checkBoxItem">
              <input
                name="checkbox1"
                id="class1"
                data-id="1"
                type="checkbox"
                value="Klasa 1"
                onChange={handleChange}
              />
              <label htmlFor="class1">Klasa 1</label>
            </div>
            <div className="checkBoxItem">
              <input
                name="checkbox2"
                id="class2"
                data-id="2"
                type="checkbox"
                value="Klasa 2"
                onChange={handleChange}
              />
              <label htmlFor="class2">Klasa 2</label>
            </div>
            <div className="checkBoxItem">
              <input
                name="checkbox3"
                id="class3"
                data-id="3"
                type="checkbox"
                value="Klasa 3"
                onChange={handleChange}
              />
              <label htmlFor="class3">Klasa 3</label>
            </div>
            {redBorder === 'red-border' && (
              <p
                style={{
                  position: 'absolute',
                }}
              >
                Wybierz przynajmniej jedną klasę
              </p>
            )}
          </CheckBoxFormInnerWrapperStyled>
        </CheckBoxFormOuterWrapperStyled>
        {chosenClasses.length !== 0 && (
          <>
            <MainButton primary text="zarejestruj nowe zawody" />
          </>
        )}
      </FormWrapper>
      {chosenClasses.length === 0 && (
        <MainButton
          secondary
          text="Dokończ rejestrację"
          onClick={() => {
            chosenClasses.length === 0 && setRedBorder('red-border');
          }}
        />
      )}
    </ColumnWrapper>
  );
};

export default ContestForm;
