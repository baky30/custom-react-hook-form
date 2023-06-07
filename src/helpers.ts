import { InputType } from './interfaces/Form';
import { HTMLInputTypeAttribute } from 'react';

export const getCorrectInputType = (type: InputType): HTMLInputTypeAttribute => {
  switch (type) {
    case 'inputText':
      return 'text';
    case 'inputEmail':
      return 'email';
    case 'inputPassword':
      return 'password';
    default:
      return '';
  }
};

export const isValidEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};
