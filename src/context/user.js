// Context for USERS!
import React from 'react';

const UserContext = React.createContext();

// Get User from Local Storage: Si HAY USER Return, else SET TO NULL
function getUserFromLocalStorage() {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, token: null };
}

// Main:
function UserProvider({ children }) {
  // States:
  const [user, setUser] = React.useState(getUserFromLocalStorage());

  // User Login Function:
  const userLogin = (user) => {
    setUser(user);
    // Guardamos en Local Storage para poder browse the website logged in.
    localStorage.setItem('user', JSON.stringify(user));
  };

  // User Logout Function:
  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem('user');
  };

  // Main:
  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserProvider, UserContext };
