import React from 'react';
import UserContext from './UserContext';

export default function Header() {
  const userContext = React.useContext(UserContext);
  
  return (
    <div>
      Hello {userContext.user.name}
    </div>
  );
}
