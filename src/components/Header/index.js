import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Go Barber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Cauê Almeida</strong>
              <Link to="/profile">Profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Cauê Almeida"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
