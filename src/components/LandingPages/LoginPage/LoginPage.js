import React, {useState} from 'react'
import './LoginPage.css'
import { DefaultButton } from '../../index.js'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${email}, ${password}`);
  }

  return (
    <div className='loginWrapper'>
        <div className='loginContainer'>
          <div className='loginTitle'>
            Log in to BrightStream
          </div>
          <form onSubmit={handleSubmit}>
            <div className='loginForm'>
              <label className='loginLabel' id="emailLabel">
                Email:
              </label>
              <input
                className='loginInput'
                type='text'
                id='username'
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
                <br></br>
            <div className='buttonContainer'>
              <button type='submit'>
                <DefaultButton text='Log in' size='Big'/>
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default LoginPage