import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Information } from './Information';
import { Container } from '../../App.styles';
import { Repositories } from './Repositories';
import { Loader } from '../../components/Loader';

export function UserInformation({ user, onReset }) {
  if (!user.githubUser) return <Loader />;

  return (
    <Container className="pt-0">
      <Information user={user} onReset={onReset} />
      <Repositories username={user.login} />
    </Container>
  );
};

UserInformation.propTypes = {
  user: PropTypes.shape({
    githubUser: PropTypes.string,
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    identification: PropTypes.string,
    birthDate: PropTypes.string,
    lastName: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  onReset: PropTypes.func,
};