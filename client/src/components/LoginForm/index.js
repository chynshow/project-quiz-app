import React from 'react';
import Input from '../Common/Input';

const LoginForm = () => {
  return (
    <form className='c-form c-login-form'>
      <Input name='login' placeholder='Email' />
      <Input name='password' type='password' placeholder='Password' />
      <button className='c-btn c-auth-form__submit-btn' type='submit'>
        Apply
      </button>
    </form>
  );
};

export default LoginForm;
