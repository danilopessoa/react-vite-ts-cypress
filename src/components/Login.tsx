import React, { ChangeEvent, useState } from 'react';
import { loginFields } from '../constants/formFields';
import { Input } from './Input';
import { FormExtra } from './FormExtra.tsx';
import { FormAction } from './FormAction.tsx';

export default function Login() {
  const fields = loginFields;
  const fieldsState: Record<string, string> = {};
  fields.forEach((field) => (fieldsState[field.id] = ''));

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setLoginState({ ...loginState, [target.id]: target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {
    const fakeResponse = {
      success: true,
      message: 'Login successful',
      token: 'fake-jwt-token',
    };

    setTimeout(() => {
      console.log(fakeResponse);
      localStorage.setItem('token', fakeResponse.token);
    }, 1000);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            {...field}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction type={'Button'} handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
