import React, { useState } from 'react';
import './App.scss';
import { data } from './form-config';
import useForm from './hooks/useForm';
import { getCorrectInputType } from './helpers';
import { FormValues } from './interfaces/Form';

function App() {
  const { register, errors, handleSubmit } = useForm(data);
  const [myFormData, setMyFormData] = useState<FormValues | null>(null);

  const onSubmit = (data: FormValues) => {
    setMyFormData(data);
  };

  const onClear = () => {
    setMyFormData(null);
  };

  return (
    <div className={'App'}>
      <form className={'form'} onSubmit={handleSubmit(onSubmit)} noValidate>
        <p className={'form-icon'}>💁🏻‍♀️️</p>
        {data.map((el) => (
          <label key={el.id} className={errors[el.id] ? 'input-error' : ''}>
            <span>{errors[el.id] ? errors[el.id] : el.label}</span>
            <input
              {...register(el.id)}
              type={getCorrectInputType(el.type)}
              placeholder={'Enter value'}
            />
          </label>
        ))}
        <div className={'button-wrapper'}>
          <button type={'submit'}>Submit</button>
        </div>
      </form>
      {myFormData && (
        <pre>
          <button onClick={onClear}>X</button>
          <p>FORM DATA: </p>
          <code>{JSON.stringify(myFormData, null, 2)}</code>
        </pre>
      )}
    </div>
  );
}

export default App;
