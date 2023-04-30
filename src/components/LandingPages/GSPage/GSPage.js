import React, {useState} from 'react'
import './GSPage.css'
import { DefaultButton } from '../../index.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from '../../firebase.js'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../../features/userSlice';

function GSPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const navigate = useNavigate()
  const redirect = () => navigate('/', {replace: true}) 

  const dispatch = useDispatch();

  const onRegister = (e) => {
    e.preventDefault();

    //Authentication firebase + Cloud firestore nested inside function
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);

      //Cloud firestore database to store new registered user
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

      dispatch(login({
        user: user,
        isLoggedIn:true
      }))
      redirect()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert("Something went wrong!")
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
              <div className='buttonContainer' onClick={onRegister}>
                <DefaultButton text='Create Account' size='Big'/>
              </div>
            </form>
        </div>
    </div>
  )
}

export default GSPage