import React from 'react';

// Components
import { Information } from './Information';
import { Container } from '../../App.styles';
import { Repositories } from './Repositories';

export function UserInformation({ user }) {
  if (!user.login) return <span>Loading...</span>

  return (
    <Container className="pt-0">
      <Information user={user} />
      <Repositories username={user.login}/>
    </Container>
  );
}