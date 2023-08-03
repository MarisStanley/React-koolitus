import { Button } from '@mui/material'
import { useContext } from 'react';
import { AuthContext } from '../pages/AuthContext'
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../../src/css/Login.css'
import { t } from 'i18next';

function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSrhDCyc7SAQGrvn-eKNuT1iCDOrcsO-o"

  const login = (e) => {
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
          navigate("/shop")
          sessionStorage.setItem("token", json.idToken)
        }
      })

  }

  return (
    <div>
      <div className='login-page'>
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">{t('login')}</span>
        </h4>
        <div className="col-md-8 order-md-1   " >
          <form className="needs-validation" noValidate    >
            <div className="row">
              <div className="mb-7">
                <label htmlFor="email">
                  <div className='contact-email'  >{t('email')}</div>
                </label>
                <input
                  ref={emailRef}
                  type="text"
                  className="form-control  login-email"
                  id="email"
                  placeholder=""
                  required
                ></input>
              </div>
              <div className="col-md-6 mb-5 ">
                <label htmlFor="password">{t('password')}</label>
                <input
                  ref={passwordRef}
                  type="password"
                  className="form-control login-password"
                  id="password"
                  placeholder=""
                  required
                ></input>
                <br />
                <div className='error-message'>{message}</div>
              </div>
            </div>
            <div className='login-button'  >
              <Button
                onClick={login}
                type="button"
                variant="outlined"
                className="btn btn-primary btn-lg btn-block  ">
                {t('login')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login