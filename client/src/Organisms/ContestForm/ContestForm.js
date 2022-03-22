import { useContext, useState } from 'react';
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
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const [data, setData] = useState('');
  const [chosenClasses, setChosenClasses] = useState([]);
  const params = useParams();
  const { state } = useContext(UserDataContext);

  let managerId = state.userId;
  if (!managerId) {
    managerId = params.userId;
  }

  const judgeArr = [];
  for (let i = 1; i <= watch('judges'); i++) {
    judgeArr.push(i);
  }
  const handleChange = (e) => {
    const checked = e.target.checked;
    const id = e.target.dataset.id;
    checked
      ? setChosenClasses((oldArray) => [...oldArray, id])
      : setChosenClasses(
          chosenClasses.filter((classNumber) => classNumber !== id),
        );
  };
  return (
    <>
      {/* <ColumnWrapper
        paddingLeftRight={1}
        maxWidthBigScreen={45}
        className="contest-form-column-wrapper"
      > */}
      <ColumnWrapper
        paddingLeftRight={4}
        paddingTop={1}
        paddingBottom={1}
        maxWidthBigScreen={35}
        className="form-wrapper"
      >
        <ContestFormHeader />

        <FormWrapper
          onSubmit={handleSubmit(async (data) => {
            data.obedienceClasses = chosenClasses;
            setData(JSON.stringify(data));
            try {
              const response = await fetch(
                `/api/contests/register/${managerId}`,
                genRequestOptionsPOST(data),
              );
              const result = await response.json();
              console.log(result);
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
            htmlFor="applicationCloseDate"
            id="applicationCloseDate"
            type="date"
            placeholder="&#xF007; Data zamknięcia zgłoszeń"
            className={errors.applicationCloseDate ? 'red-border' : ''}
            {...register('applicationCloseDate', {
              required: 'Wybierz datę zamknięcia zgłoszeń',
            })}
          />
          {errors.applicationCloseDate && (
            <p>{errors.applicationCloseDate.message}</p>
          )}
          <InputField
            labelText="Adres zawodów - kraj"
            htmlFor="country"
            id="country"
            type="text"
            placeholder="&#xf015; Adres zawodów - kraj"
            className={errors.country ? 'red-border' : ''}
            {...register('country', {
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
            {...register('city', {
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
            {...register('street', {
              required: 'Wpisz ulicę, na której odbywają się zawody',
              min: 5,
            })}
          />
          {errors.street && <p>{errors.street.message}</p>}

          {/* ==================================================== */}
          <InputField
            labelText="Adres zawodów - numer obiektu"
            htmlFor="number"
            id="number"
            type="number"
            placeholder="&#xf015; Adres zawodów - numer obiektu"
            className={errors.number ? 'red-border' : ''}
            {...register('number', {
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
            htmlFor="code"
            id="code"
            type="text"
            pattern="^\d{2}-\d{3}$"
            placeholder="&#xf015;; Adres zawodów - kod pocztowy"
            className={errors.code ? 'red-border' : ''}
            {...register('code', {
              required: 'Podaj kod pocztowy w formacie XX-XXX',
            })}
          />
          {errors.code && <p>{errors.code.message}</p>}
          <InputLabel
            labelText="Wybierz ilość sędziów"
            htmlFor="judges"
          ></InputLabel>
          <SelectFieldStyled
            id="judges"
            defaultValue="Wybierz ilość sędziów"
            placeholder="&#xF007; Wybierz ilość sędziów"
            {...register('judges', { required: true })}
          >
            <option value="0" defaultValue>
              Wybierz ilość sędziów
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </SelectFieldStyled>
          {judgeArr.map((judge, index) => {
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
                  labelText={`Sędzia ${judge}`}
                  htmlFor={`judge${judge}`}
                  id={`judge${judge}`}
                  type="text"
                  placeholder={`Sędzia ${judge}`}
                  className={errors[`judge${judge}`] ? 'red-border' : ''}
                  {...register(`judge${judge}`, {
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
            htmlFor="komisarz"
            id="komisarz"
            type="text"
            placeholder="&#xF007; Komisarz"
            className={errors.komisarz ? 'red-border' : ''}
            {...register('komisarz', {
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
          {errors.maxAmountOfApplications && (
            <p>Podaj liczbę z zakresu 1-100 </p>
          )}
          <InputLabel labelText="Wybierz planowane klasy" htmlFor="checkboxy" />

          <CheckBoxFormOuterWrapperStyled
            className={chosenClasses.length === 0 ? `red-border` : ''}
          >
            <CheckBoxFormInnerWrapperStyled>
              <div className="checkBoxItem">
                <input
                  name="checkbox0"
                  id="class0"
                  data-id="0"
                  type="checkbox"
                  value="Klasa 0"
                  {...register('class0')}
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
                  {...register('class1')}
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
                  {...register('class2')}
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
                  {...register('class3')}
                  onChange={handleChange}
                />
                <label htmlFor="class3">Klasa 3</label>
              </div>
              {chosenClasses.length === 0 && (
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
          <>
            <MainButton secondary disabled text="Dokończ rejestrację" />
          </>
        )}
      </ColumnWrapper>
    </>
  );
};

export default ContestForm;
