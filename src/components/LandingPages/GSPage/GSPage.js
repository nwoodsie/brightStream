import React, {useState} from 'react'
import './GSPage.css'
import { DefaultButton } from '../../index.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import {auth, db} from '../../firebase.js'

function GSPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const onRegister = (e) => {
    e.preventDefault();

    //Authentication firebase + Cloud firestore nested inside function
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);

      //Cloud firestore database for user
      let userData = {
        user_id: user.uid,
        name: name,
        email: email,
        password: password,
        dolby_creds: {
          streamName: "",
          streamToken: "",
          dolby_id: ""
        }
      }
      setDoc(doc(db, "users", user.uid), userData);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });

  }

  return (
    <div className='gsWrapper'>
        <div className='gsContainer'>
          <div className='gsTitle'>
              Create your account
            </div>
            <form>
              <div className='gsForm'>
                <label className='gsLabel' id="nameLabel">
                  Name:
                </label>
                <input className='gsInput'
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div>
                <label className='gsLabel' id="emailLabel">
                  Email:
                </label>
                <input className='gsInput'
                  type="text"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div>
                <label className='gsLabel' id="passwordLabel">
                  Password:
                </label>
                <input className='gsInput'
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className='gsLabel' id="cpasswordLabel">
                  Confirm Password:
                </label>
                <input className='gsInput'
                  type="password"
                  id="cpassword"
                  required
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>
              <div>
                <input type='checkbox' className='gsBox' />
                <label className='gsRoleLabel'>
                  Student
                </label>
                <input type='checkbox' className='gsBox'/>
                <label className='gsRoleLabel'>
                  Teacher
                </label>
              </div>
              <div className='buttonContainer'>
                <button onClick={onRegister}>
                  <DefaultButton text='Create Account' size='Big'/>
                </button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default GSPage