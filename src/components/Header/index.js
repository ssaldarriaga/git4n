import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Avatar } from '../Avatar';
import { Header } from './Header.styles';

// Utils & Assets
import defaultAvatar from '../../assets/img/avatar.png';

export function AppHeader({ username, avatarUrl = defaultAvatar }) {
  return (
    <Header className="header">
      <h1 className="header__logo">Git4n</h1>
      <div className="header__profile">
        <Avatar src={avatarUrl} alt={username || 'git4n'} />
        {username && <span className="header__profile--username">{username}</span>}
      </div>
    </Header>
  );
};

AppHeader.propTypes = {
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
}