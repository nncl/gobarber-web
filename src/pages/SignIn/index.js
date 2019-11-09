import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Go Barber" />

      <form action="">
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />

        <button type="submit">Sign in</button>
        <Link to="/register">Create free account</Link>
      </form>
    </>
  );
}
