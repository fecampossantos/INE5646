import React, { useState } from "react";
import styled from "styled-components";
import EmailInput from "components/EmailInput";
import PasswordInput from "components/PasswordInput";
import Button from "components/Button";
import { useRouter } from "next/router";

const FlexContainer = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  background-color: #efdec6;
`;

const ImageContainer = styled.div`
  flex: 0.4;
  background-color: grey;

  img {
    height: 100vh;
    width: 100%;
  }
`;

const LoginContainer = styled.div`
  flex: 0.6;
  padding: 20px;
  heigth: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    console.log(email)
    console.log(password)

    router.replace("/home");
  };

  return (
    <FlexContainer>
      <ImageContainer>
        <img src="loginImage.jpg" alt="imagem" />
      </ImageContainer>

      <LoginContainer>
        <EmailInput
          id="emailInput"
          label="Email"
          onChange={setEmail}
          width="50%"
        />
        <PasswordInput
          id="passwordInput"
          label="Senha"
          onChange={setPassword}
          width="50%"
        />
        <Button
          backgroundColor="primary"
          onClick={handleLogin}
          width="50%"
        >
          Entrar
        </Button>
      </LoginContainer>
    </FlexContainer>
  );
};

export default Login;
