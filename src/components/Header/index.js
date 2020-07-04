import React, { useMemo } from 'react';

// Components
import { Avatar } from '../Avatar';
import { Header } from './Header.styles';

// Utils & Assets
import { getCookie } from '../../utils/cookieUtils';
import defaultAvatar from '../../assets/img/avatar.png';

export function AppHeader() {
  const { githubUser, avatar_url: avatarUrl = defaultAvatar } = useMemo(() => getCookie(), []);

  return (
    <Header className="header">
      <h1 className="header__logo">Git4n</h1>
      <div className="header__profile">
        <Avatar src={avatarUrl} alt={githubUser || 'git4n'} />
        {githubUser && <span className="header__profile--username">{githubUser}</span>}
      </div>
    </Header>
  );
}