import React, {useState} from 'react'
import './LoginPage.css'
import {auth} from '../../firebase.js'
import { DefaultButton } from '../../index.js'
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })
  }

  return (
    <div className='loginWrapper'>
        <div className='loginContainer'>
          <div className='loginTitle'>
            Log in to BrightStream
          </div>
          <form>
            <div className='loginForm'>
              <label className='loginLabel' id="emailLabel">
                Email:
              </label>
              <input
                className='loginInput'
                type='text'
                id='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
              <label className='loginLabel' id="passwordLabel">
                Password:
              </label>
              <input
                className='loginInput'
                type='password'
                id='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='buttonContainer'>
              <button onClick={onLogin}>
                <DefaultButton text='Log in' size='Big'/>
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default LoginPage