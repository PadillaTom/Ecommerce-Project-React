import React, { useState } from 'react';
// Strapi Function:
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';
// Handle User:
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';

export default function Login() {
  const history = useHistory();
  // User Context:
  // 1) Comprobamos que funcione:
  // const value = React.useContext(UserContext);
  // console.log(value);
  // 2) Function real:
  const { userLogin, alert, showAlert } = React.useContext(UserContext);

  // States:
  const [email, setEmail] = useState('myaccount@myaccount.com');
  const [password, setPassword] = useState('password');
  const [username, setUsername] = useState('default');
  const [isMember, setIsMember] = useState(true);
  // Check for Empty Input values:
  let isEmpty = !email || !password || !username;
  // Toggle Member:
  const toggleMember = () => {
    // Antes de ser member: Check the username
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername('default') : setUsername('');
      return isMember;
    });
  };
  // Handle Submit:
  const handleSubmit = async (e) => {
    //
    e.preventDefault();
    let response;
    if (isMember) {
      // Response = LoginUser
      response = await loginUser({ email, password });
    } else {
      // Response = Register User
      response = await registerUser({ email, password, username });
    }
    // Ademas --> Si HAY RESPUESTA:
    if (response) {
      // Data usada en el USER CONTEXT !!!!!!!!!!
      // console.log(response); // Comprobamos que funcione y ver la data
      // Tomamos la response y destructuramos-->
      const {
        jwt: token,
        user: { username },
      } = response.data;
      // Creamos new User con dicha data destructurada
      const newUser = { token, username };
      // Pasamos la data como LOGGED IN
      userLogin(newUser);
      // Una vez Logged IN:
      // Alertamos
      showAlert({ msg: `"${username}" Logged In` });
      // Pusheamos a Products
      history.push('/products');
    } else {
      // Show Alert
      showAlert({ msg: `Log In Error`, type: 'danger' });
    }
  };
  // Main:
  return (
    <section className='section form-section'>
      <h2 className='section-title'>{isMember ? 'Sign In' : 'Register'}</h2>
      <form className='login-form'>
        {/* Single Input */}
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* End Single Input */}
        {/* Single Input */}
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* End Single Input */}
        {/* Single Input Username */}
        {!isMember && (
          <div className='form-control'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* End Single Input Username */}
        <div className='form-btns-container'>
          {/* Empty Form Text */}
          {isEmpty && <p className='form-empty'>Please Fill Out the Form.</p>}
          {/* Submit BTN */}
          {!isEmpty && (
            <button type='button' className='btn-form' onClick={handleSubmit}>
              Submit
            </button>
          )}
          {/* Register */}
          <p className='register-link'>
            {isMember ? 'Need to register?' : 'Aleardy a member?'}
            <button type='button' onClick={toggleMember}>
              Click Here
            </button>
          </p>
        </div>
      </form>
    </section>
  );
}
