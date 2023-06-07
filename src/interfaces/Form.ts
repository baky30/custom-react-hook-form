export interface IFormField {
  id: string;
  type: InputType;
  label: string;
  required?: boolean;
  defaultValue?: string;
}

export type FormValues = {
  [key in IFormField['id']]: string;
};

export type InputType = 'inputText' | 'inputEmail' | 'inputPassword';
