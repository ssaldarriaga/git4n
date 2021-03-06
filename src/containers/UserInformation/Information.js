import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Avatar } from '../../components/Avatar';
import { InformationContainer, BackButton } from './UserInformation.styles';

// Utils & Assets
import defaultAvatar from '../../assets/img/avatar-black.png';

export function Information({
  user: {
    githubUser,
    avatar_url: avatarUrl = defaultAvatar,
    identification,
    birthDate,
    lastName,
    name,
    email,
  },
  onReset = () => {},
}) {
  return (
    <InformationContainer className="information mb-3">
      <BackButton onClick={onReset}>⮜ Reset</BackButton>
      <div className="row">
        <div className="col-auto d-flex justify-content-center align-items-center">
          <Avatar src={avatarUrl} alt={githubUser} height={100} width={100} className="mb-3" />
        </div>
        <div className="col">
          <h3>{name} {lastName}</h3>
          <ul className="information__list">
            <li><strong>Username: </strong>{githubUser}</li>
            <li><strong>Identification: </strong>{identification}</li>
            <li><strong>Birth date: </strong>{birthDate}</li>
            <li><strong>Email: </strong>{email}</li>
          </ul>
        </div>
      </div>
    </InformationContainer>
  );
}

Information.propTypes = {
  user: PropTypes.shape({
    githubUser: PropTypes.string,
    avatar_url: PropTypes.string,
    identification: PropTypes.string,
    birthDate: PropTypes.string,
    lastName: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  onReset: PropTypes.func,
};