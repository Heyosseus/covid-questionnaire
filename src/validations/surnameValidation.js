import {  useField } from 'vee-validate';

export function useSurnameValidation() {
  const {
    value: surname,
    errorMessage: surnameErrorMessage,
    ...surnameValidationListeners
  } = useField('surname', validateSurname);

  function validateSurname(value) {
    if (!value) {
      return 'გვარის ველი სავალდებულოა';
    } else if (value.length < 3) {
      return 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან';
    } else if (value.length > 255) {
      return 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან';
    }

    return true;
  }

  return { surname, surnameErrorMessage, surnameValidationListeners };
}
