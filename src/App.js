import React, { useState, useEffect } from 'react';

// Components
import { AppHeader } from './components/Header';
import { UserForm } from './containers/UserForm';
import { UserInformation } from './containers/UserInformation';

// Utils & Assets
import { getUser } from './api/github';
import { getCookie } from './utils/cookieUtils';


function App() {
  const [userData, setUserData] = useState(() => getCookie());

  const loadUser = async (username) => {
    const { data, isSuccessful } = await getUser(username);
    if (isSuccessful) {
      setUserData(prev => ({ ...data, ...prev }));
    }
  }

  const handleUpdateUser = async (values) => {
    await loadUser(values.githubUser);
    setUserData(prev => ({ ...prev, ...values }));
  }

  useEffect(() => {
    const userCookie = getCookie();
    if (userCookie?.githubUser) {
      loadUser(userCookie.githubUser);
    }
  }, []);

  return (
    <>
      <AppHeader username={userData?.githubUser} avatarUrl={userData.avatar_url} />
      {!userData?.githubUser && <UserForm onUpdateUser={handleUpdateUser} />}
      {userData?.githubUser && <UserInformation user={userData} />}
    </>
  );
}

export default App;
