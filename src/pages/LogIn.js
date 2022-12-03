import React from "react";
import { useForm } from 'react-hook-form';

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='email' type='email' {...register("email", { required: true, minLength: 3, pattern: /[a-zA-z0-9]@[a-zA-z0-9]/g })} />
      <input placeholder='password' type='password' {...register("password", { required: true, minLength: 3 })} />
      <input type="submit" />
    </form>
  )
};

export default LogIn;