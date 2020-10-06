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

  // ALERTS for User Logs (This could be another context itself)
  const [alert, setAlert] = React.useState({
    show: false, // Show or NOT
    msg: '', // To show
    type: 'success', // CSS Style
  });
  const showAlert = ({ type = 'success', msg }) => {
    setAlert({ show: true, msg, type });
  };
  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };
  // Main:
  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogout, alert, showAlert, hideAlert }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserProvider, UserContext };
