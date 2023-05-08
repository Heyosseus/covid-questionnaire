import { useField } from 'vee-validate';

export function useEmailValidation() {
  const {
    value: email,
    errorMessage: emailErrorMessage,
    ...emailValidationListeners
  } = useField('email', validateEmail);

  function validateEmail(value) {
    if (!value) {
      return 'ელ. ფოსტის ველი სავალდებულოა';
    } else if (value.length < 3) {
      return 'ელ. ფოსტის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან';
    } else if (value.length > 255) {
      return 'ელ. ფოსტის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან';
    } else if (!/^[\w-.]+@redberry\.ge$/.test(value)) {
      return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
    }

    return true;
  }

  return { email, emailErrorMessage, emailValidationListeners };
}
