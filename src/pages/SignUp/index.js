import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email(`Invalid e-mail address`)
    .required(`E-mail address is required`),
  name: Yup.string().required(`Name is required`),
  password: Yup.string()
    .min(6, `Password must have at least 6 characters`)
    .required(`Password is required`),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Go Barber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Full name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Create</button>
        <Link to="/">Already have an account?</Link>
      </Form>
    </>
  );
}
