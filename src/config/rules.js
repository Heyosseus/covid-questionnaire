import { defineRule } from 'vee-validate';
import {
  required,
  email,
  min,
  max,
  alpha,
} from '@vee-validate/rules';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
defineRule('alpha', alpha);

defineRule('redberryEmail', (value) => {
  if (!/^[\w-.]+@redberry\.ge$/.test(value)) {
     return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
  }
  return true;
});
