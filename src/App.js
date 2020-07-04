import React, { useState, useEffect } from 'react';

// Components
import { AppHeader } from './components/Header';
import { Container } from './App.styles';
import { UserForm } from './containers/UserForm';

// Utils & Assets
import { getCookie } from './utils/cookieUtils';


function App() {
  const [user, setUser] = useState(() => getCookie());

  useEffect(() => {
    if (!user?.githubUser) return;
  }, [user]);

  console.log(user);
  return (
    <>
      <AppHeader />
      <Container>
        {!user?.githubUser && <UserForm onUpdateUser={setUser} />}
      </Container>
    </>
  );
}

export default App;
