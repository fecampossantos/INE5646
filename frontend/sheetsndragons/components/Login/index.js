import React from "react";
import styled from "styled-components";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const ImageContainer = styled.div`
  flex: 0.3;
`

const LoginContainer = styled.div`
  flex: 0.7;
  padding: 20px;
`

const Login = () => {

  return (
    <FlexContainer>
      <ImageContainer></ImageContainer>

      <LoginContainer>
        <EmailInput id="emailInput" label="Email"/>
        <PasswordInput id="passwordInput" label="Senha"/>
      </LoginContainer>
    </FlexContainer>
  )
}

export default Login;