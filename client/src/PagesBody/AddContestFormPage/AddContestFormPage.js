import COLORS from '../../Styles/varsStyledComponents';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FONTS from '../../Styles/fontsStyledComponents';
import FormWrapper from './../../Atoms/FormWrapper/FormWrapper';
import InputField from './../../Molecules/InputField/InputField';
import InputLabel from './../../Atoms/InputLabel/InputLabel';
import MainButton from './../../Atoms/MainButton/MainButton';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 0 0 10px;
  border: 0.5px solid ${({ theme }) => theme.grey400};
  margin: 0 0 3px 0;
  background: ${({ theme }) => theme.white};
  border-radius: 8px;
  color: ${({ theme }) => theme.grey400};
  font-family: Mulish, FontAwesome, sans-serif;
  ${FONTS.body_semibold};
  &::placeholder {
    color: ${({ theme }) => theme.grey400};
  }
  &:focus {
    border: 0.5px solid transparent;
    outline: 3px solid ${({ theme }) => theme.primary201};
  }
  &.red-border {
    border: 0.5px solid transparent;
    outline: 1.5px solid ${COLORS.negative400};
  }
`;

const Select = styled.select`
  width: 100%;
  height: 3rem;
  padding: 0 0 0 10px;
  border: 0.5px solid ${({ theme }) => theme.grey400};
  margin: 0 0 3px 0;
  background: ${({ theme }) => theme.white};
  border-radius: 8px;
  color: ${({ theme }) => theme.grey400};
  font-family: Mulish, FontAwesome, sans-serif;
  ${FONTS.body_semibold};
  &::placeholder {
    color: ${({ theme }) => theme.grey400};
  }
  &:focus {
    border: 0.5px solid transparent;
    outline: 3px solid ${({ theme }) => theme.primary201};
  }
  &.red-border {
    border: 0.5px solid transparent;
    outline: 1.5px solid ${COLORS.negative400};
  }
`;

const AddContestFormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    /*  mode: 'onBlur'  */
  });
  const [data, setData] = useState('');
  console.log(data);

  const judgeArr = [];
  for (let i = 1; i <= watch('judges'); i++) {
    judgeArr.push(i);
  }

  return (
    <>
      <ColumnWrapper paddingLeftRight={1}>
        <FormWrapper
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
        >
          <InputField
            labelText="Nazwa zawodów"
            htmlFor="name"
            id="name"
            type="text"
            placeholder="&#xF007; Nazwa zawodów"
            {...register('name', {
              required: 'Wpisz prawidłową nazwę konkursu',
              minLength: {
                value: 5,
                message: 'Wpisz prawidłową nazwę zawodów, min. 5 znaków',
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <InputField
            labelText="Oddział ZKwP:"
            htmlFor="department"
            id="department"
            type="text"
            placeholder="&#xF007; Oddział ZKwP"
            {...register('department', {
              required: 'Wpisz oddział ZKwP',
              minLength: {
                value: 5,
                message: 'Wpisz prawidłowy oddział ZKwP, min. 5 znaków',
              },
            })}
          />
          {errors.department && <p>{errors.department.message}</p>}
          <InputField
            labelText="Data rozpoczęcia zawodów"
            htmlFor="startingDate"
            id="startingDate"
            type="date"
            defaultValue={new Date().toISOString().split('T')[0]}
            placeholder="&#xF007; Data rozpoczęcia zawodów"
            {...register('startingDate', {
              required: 'Wybierz datę rozpoczęcia zawodów',
            })}
          />
          {errors.startingDate && <p>{errors.startingDate.message}</p>}
          <InputField
            labelText="Data zakończenia zawodów"
            htmlFor="endingDate"
            id="endingDate"
            type="date"
            defaultValue={new Date().toISOString().split('T')[0]}
            placeholder="&#xF007; Data zakończenia zawodów"
            {...register('endingDate', {
              required: 'Wybierz datę zakończenia zawodów',
            })}
          />
          {errors.endingDate && <p>{errors.endingDate.message}</p>}
          <InputField
            labelText="Data otwarcia zgłoszeń"
            htmlFor="openingDate"
            id="openingDate"
            type="date"
            defaultValue={new Date().toISOString().split('T')[0]}
            placeholder="&#xF007; Data otwarcia zgłoszeń"
            {...register('openingDate', {
              required: 'Wybierz datę otwarcia zgłoszeń',
            })}
          />
          {errors.openingDate && <p>{errors.openingDate.message}</p>}
          <InputField
            labelText="Data zamknięcia zgłoszeń"
            htmlFor="closingDate"
            id="closingDate"
            type="date"
            defaultValue={new Date().toISOString().split('T')[0]}
            placeholder="&#xF007; Data zamknięcia zgłoszeń"
            {...register('closingDate', {
              required: 'Wybierz datę zamknięcia zgłoszeń',
            })}
          />
          {errors.closingDate && <p>{errors.closingDate.message}</p>}
          <InputField
            labelText="Adres zawodów -kraj"
            htmlFor="country"
            id="country"
            type="text"
            placeholder="&#xF007; Adres zawodów - kraj"
            {...register('country', {
              required: 'Wpisz kraj w którym odbywają się zawody',
              min: 5,
              maxLength: 100,
            })}
          />
          {errors.country && <p>{errors.country.message}</p>}
          <InputField
            labelText="Adres zawodów - miasto"
            htmlFor="city"
            id="city"
            type="text"
            placeholder="&#xF007; Adres zawodów - miasto"
            {...register('city', {
              required: 'Wpisz miasto, w którym odbywają się zawody',
              min: 5,
            })}
          />
          {errors.city && <p>{errors.city.message}</p>}
          <InputField
            labelText="Adres zawodów - numer obiektu"
            htmlFor="number"
            id="number"
            type="number"
            placeholder="&#xF007; Adres zawodów - numer obiektu"
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
            placeholder="&#xF007; Adres zawodów - kod pocztowy"
            {...register('code', {
              required: 'Podaj kod pocztowy w formacie XX-XXX',
            })}
          />
          {errors.code && <p>{errors.code.message}</p>}
          <InputLabel
            labelText="Wybierz ilość sędziów"
            htmlFor="judges"
          ></InputLabel>
          <Select
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
          </Select>
          {judgeArr.map((judge, index) => {
            return (
              <div key={index}>
                <InputLabel
                  labelText={`Sędzia ${judge}`}
                  htmlFor="judge"
                ></InputLabel>
                <Input
                  id="judge"
                  type="text"
                  placeholder={`Sędzia ${judge}`}
                  {...register('judge', {
                    required: 'Wpisz imię i nazwisko sędziego',
                    maxLength: 100,
                  })}
                />
                {errors.judge && (
                  <p>
                    {errors.judge.message} {judge}
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
            {...register('komisarz', {
              required: 'Wpisz imię i nazwisko komisarza',
              min: 3,
              maxLength: 100,
            })}
          />
          {errors.komisarz && <p>{errors.komisarz.message}</p>}
          <InputLabel
            labelText="Opłata startowa [PLN]"
            htmlFor="opłata"
          ></InputLabel>
          <Input
            id="oplata"
            type="number"
            placeholder="&#xF007; Opłata startowa [PLN]"
            {...register('oplata', {
              required: 'Podaj opłatę startową w PLN',
              max: 1000,
              min: 1,
            })}
          />
          {errors.oplata && <p>{errors.oplata.message}</p>}
          {errors.oplata &&
            (errors.oplata.type === 'max' || errors.oplata.type === 'min') && (
              <p>Podaj liczbę z zakresu 1-1000 </p>
            )}
          <InputField
            labelText="Maksymalna liczba zawodników"
            htmlFor="liczba"
            id="liczba"
            type="number"
            placeholder="&#xF007; Maksymalna liczba zawodników"
            {...register('liczba', {
              required: 'Podaj maksymalną liczbę zawodników',
              max: 100,
              min: 1,
            })}
          />
          {errors.liczba && <p>{errors.liczba.message}</p>}
          {errors.liczba && <p>Podaj liczbę z zakresu 1-100 </p>}
          <MainButton primary text="zarejestruj nowe zawody" />
        </FormWrapper>
      </ColumnWrapper>
    </>
  );
};
export default AddContestFormPage;
