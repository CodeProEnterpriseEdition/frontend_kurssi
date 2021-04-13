import React, {useState, useEffect } from 'react';
import Header from './Header';
import UserContext from './UserContext';

function App() {
  const [user, setUser] = useState({user: {}});

  useEffect(() => 
    setUser({user:{username: 'jh', name: 'Juha Hinkula'}})
  , [])

  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

export default App;
