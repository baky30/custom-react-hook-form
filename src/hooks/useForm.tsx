import React, { ChangeEventHandler, useState } from 'react';
import { FormValues, IFormField } from '../interfaces/Form';
import { isValidEmail } from '../helpers';

const useForm = (formData: IFormField[]) => {
  const initialValues: FormValues = formData.reduce((values: FormValues, field) => {
    values[field.id] = field.defaultValue || '';
    return values;
  }, {});

  const [formState, setFormState] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormValues>({});

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const register = (fieldId: string) => ({
    id: fieldId,
    name: fieldId,
    value: formState[fieldId],
    onChange: handleInputChange,
  });

  const validateForm = (): FormValues => {
    const newErrors: FormValues = {};

    formData.forEach((field) => {
      const { id, label, required } = field;
      const value = formState[id];

      if (required && !value) {
        newErrors[id] = `${label} is required.`;
      }

      if (id === 'email' && value && !isValidEmail(value)) {
        newErrors[id] = 'Invalid email address.';
      }
    });

    return newErrors;
  };

  const handleSubmit =
    (onSubmit: (data: FormValues) => void) => (event?: React.BaseSyntheticEvent) => {
      event?.preventDefault();

      const validationErrors = validateForm();
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        onSubmit(formState);
      }
    };

  return {
    formState,
    errors,
    handleInputChange,
    handleSubmit,
    register,
  };
};

export default useForm;
