import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../pages/AuthContext';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import '../../src/css/Signup.css'
import { t } from 'i18next';



function SignUp() {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSrhDCyc7SAQGrvn-eKNuT1iCDOrcsO-o"

  const signup = (e) => {
    e.preventDefault();
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
          navigate("login")
          sessionStorage.setItem("token", json.idToken)
        }
      })

  }

  return (
    <div>
      <div className='signup-page'>
        <h4 className="d-flex justify-content-between align-items-center mb-3 ">
          <span className="text-muted   signup-text">{t('signup')}</span>
        </h4>
        <div className="col-md-8 order-md-1   " >
          <form className="needs-validation" noValidate    >
            <div className="row">
              <div className="mb-7">
                <label htmlFor="email">
                  <div   >{t('email')}</div>
                </label>
                <input
                  ref={emailRef}
                  type="text"
                  className="form-control  signup-email"
                  id="email"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">
                  {t('valid-email-is-required')}.
                </div>
              </div>
              <div className="col-md-6 mb-5 ">
                <label htmlFor="password">{t('password')}</label>
                <input
                  ref={passwordRef}
                  type="password"
                  className="form-control signup-password"
                  id="password"
                  placeholder=""
                  required
                ></input>
                <br />
                <div className='error-message'>{message}</div>
              </div>
            </div>
            <div className='signup-button' >
              <Button
                onClick={signup}
                type="submit"
                variant="outlined"
                className="btn btn-primary btn-lg btn-block type=submit "
              >
                {t('signup')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp