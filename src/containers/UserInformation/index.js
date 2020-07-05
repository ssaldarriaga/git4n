import React from 'react';

// Components
import { Information } from './Information';
import { Container } from '../../App.styles';
import { Repositories } from './Repositories';

export function UserInformation({ user, onReset }) {
  if (!user.login) return <span>Loading...</span>

  return (
    <Container className="pt-0">
      <Information user={user} onReset={onReset} />
      <Repositories username={user.login} />
    </Container>
  );
}