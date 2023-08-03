import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAMhnuim3HET-7QLWvpO9R9mL9vRr0jLdY"


  const login = () => {
    const payload = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value,
      "returnSecureToken": true
    }
    fetch(url, { "method": "POST", "body": JSON.stringify(payload) })
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          setMessage(json.error.message)
        } else {
          setLoggedIn(true)
          navigate("/admin")
          sessionStorage.setItem("token", json.idToken)
        }
      })

  }

  return (
    <div>
      <div>{message}</div>
      <label >Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label >Password</label> <br />
      <input ref={passwordRef} type="text" /> <br />
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default Login