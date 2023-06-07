import { IFormField } from './interfaces/Form';

export const data: IFormField[] = [
  {
    id: 'first_name',
    type: 'inputText',
    label: 'First Name',
    defaultValue: 'Some first name',
  },
  {
    id: 'last_name',
    type: 'inputText',
    label: 'Last Name',
    required: true,
  },
  {
    id: 'email',
    type: 'inputEmail',
    label: 'Email',
    required: true,
  },
  {
    id: 'password',
    type: 'inputPassword',
    label: 'Password',
    defaultValue: 'Some first name',
    required: true,
  },
];
