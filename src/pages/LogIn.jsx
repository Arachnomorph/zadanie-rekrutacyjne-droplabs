import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import styles from '../scss/styles.module.scss';

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const [searchParams] = useSearchParams()
  const navigate = useNavigate();
  const onSubmit = data => {
    const loginToken = '123456';
    document.cookie = `login_token=${loginToken}`;
    navigate(searchParams.get('returnUrl'));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='email' type='email' minLength='3'
        {...register("email", {
          required: true,
          minLength: 3,
          pattern: /@/
        })} />
      <input placeholder='password' type='password' minLength='3'
        {...register("password", {
          required: true,
          minLength: 3
        })} />
      <input type="submit" className={styles.loginButton} />
    </form>
  )
};

export default LogIn;