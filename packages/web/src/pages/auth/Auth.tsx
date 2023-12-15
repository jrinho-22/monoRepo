import React, { useState } from 'react'
import { signInWithGoogle, getLoggedUser, emailPasswordSignIn, emailPasswordSignUp } from '@monorepo/axios-config'
import { Button, Input, Requirements  } from '@monorepo/components'
import { Box, Link } from './Auth.styled'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../redux/reducers/auth'
import GoogleButton from 'react-google-button'

const passwordRequirements = [
  {
    text: 'Must be at least 6 characters',
    validator: val => val.length >= 6,
  },
  {
    text: 'Must contain at least one number',
    validator: val => /\d/g.test(val),
  }
];


export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const [valid,  setValid] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const googleSignIn = async () => {
    const key = await signInWithGoogle()
    const loggedUser = await getLoggedUser(key.name)
    dispatch(authActions.login(loggedUser))
  }

  const handleSignIn = async () => {
    const loggedUser = await emailPasswordSignIn(username, password)
    if (loggedUser) {
      dispatch(authActions.login({name: loggedUser}))
    }
  };

  const switchSignUpPage = () => {
    dispatch(authActions.signUp())
  };


  return ( 
  <React.Fragment>
    <h1 style={{color: '#5b5b5b'}}>Sign In With</h1>
    <Input placeholder='Email' value={username} onChange={e => setUsername(e.target.value)} />
    <Input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
    <Requirements
      value={password}
      requirements={passwordRequirements}
      onValidChange={isValid => setValid(isValid)}
    />

    <Button
      disabled={!valid || !username}
      sx={{
        margin: '15px 0px'
      }}
      text='sign In'
      onClick={handleSignIn}
    />
    <span style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial',
      fontSize: '13px'
      }}>
      Sign in with Google or&nbsp; <Link onClick={switchSignUpPage}>sign up</Link>
    </span>
    <GoogleButton style={{margin: '4px'}} onClick={googleSignIn}> google sigin </GoogleButton>
  </React.Fragment>
  )
}

const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const [valid,  setValid] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignUp = async () => {
    const loggedUser = await emailPasswordSignUp(username, password)
    if (loggedUser) {
      dispatch(authActions.login({name: loggedUser.email}))
    }
  };

  const switchSignInPage = () => {
    dispatch(authActions.signIn())
  };

  return ( 
    <React.Fragment>
      <h1 style={{color: '#5b5b5b'}}>Sign Up</h1>
      <Input placeholder='Email' value={username} onChange={e => setUsername(e.target.value)} />
      <Input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
      <Requirements
        value={password}
        requirements={passwordRequirements}
        onValidChange={isValid => setValid(isValid)}
      />

      <Button
        disabled={!valid || !username}
        sx={{
          margin: '15px 0px'
        }}
        text='sign Up'
        onClick={handleSignUp}
      />
      <span style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial',
        fontSize: '13px'
        }}>
          Return to&nbsp; <Link onClick={switchSignInPage}>sign in</Link> &nbsp;page
      </span>
    </React.Fragment>
  )
}

const AuthPage: React.FC = () => {
  const reduxAuth: any = useSelector((state: any) => state.auth);

  return ( 
  <Box>
    {reduxAuth.signUp === false ? <Login /> : <SignUp />}
  </Box>
  )
}

export default AuthPage