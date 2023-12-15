import React from 'react'
import { Background, Container } from "./Content.styled";
import { useSelector } from "react-redux";
import AuthPage from '../pages/auth/Auth';
import Home from '../pages/home/Home'  

const Content: React.FC = () => {
  const reduxAuth: any = useSelector((state: any) => state.auth);
  return (
    <React.Fragment>
      <Background/>
      <Container>
        {reduxAuth.isAuthenticated == false ? <AuthPage /> : <Home />}
      </Container>
    </React.Fragment>
  )
}

export default Content
