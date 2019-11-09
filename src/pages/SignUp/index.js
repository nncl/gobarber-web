import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Go Barber" />

      <form action="">
        <input type="text" placeholder="Fullname" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />

        <button type="submit">Create</button>
        <Link to="/">Already have an account?</Link>
      </form>
    </>
  );
}
