import { configure } from 'vee-validate';

import { localize } from '@vee-validate/i18n';

import en from '@vee-validate/i18n/dist/locale/en.json';
import ka from '@vee-validate/i18n/dist/locale/ka.json';

configure({
  generateMessage: localize({
    en: {
      ...en,
      messages: {
        required: 'This field is required',
        email: 'Please enter a valid email address',
        min: 'This field must be at least 3 characters',
        max: 'This field must be less than 3 characters',
        alpha: 'This field may only contain alphabetic characters',
      },
      names: {
      
      },
    },
    ka: {
      ...ka,
      messages: {
        required: 'ამ ველის შევსება აუცილებელია',
        email: 'შეიყვანეთ სწორი ელ-ფოსტა',
        min: ' ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
        max: ' ველი უნდა შედგებოდეს 3 სიმბოლოსგან',
        alpha: 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
      },
      names: {
        email: 'იმეილი',
        password: 'პაროლი',
        name: 'სახელი',
        surname: 'გვარი',
     
      },
    },
  }),
});
