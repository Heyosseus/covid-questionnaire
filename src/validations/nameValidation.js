import { useField } from 'vee-validate';

export function useNameValidation() {
  const nameFromLocalStorage = localStorage.getItem('name') || '';

  const {
    value: name,
    errorMessage: nameErrorMessage,
    ...nameValidationListeners
  } = useField('name', validateName, {
    initialValue: nameFromLocalStorage,
  });

  function validateName(value) {
    if (!value) {
      return 'სახელის ველი სავალდებულოა';
    } else if (value.length < 3) {
      return 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან';
    } else if (value.length > 255) {
      return 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან';
    }

    return true;
  }

  return { name, nameErrorMessage, nameValidationListeners };
}