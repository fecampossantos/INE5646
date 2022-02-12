import React, { useState } from "react";
import styled from "styled-components";
import EmailInput from "components/EmailInput";
import PasswordInput from "components/PasswordInput";
import Button from "components/Button";
import { useRouter } from "next/router";
import Text from "../Text";

import { validateEmail } from "../../helpes/utils";

const FlexContainer = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  background-color: #efdec6;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 0.4;
  background-color: grey;
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;

    @media (max-width: 700px) {
      height: 100%;
    }
  }

  @media (max-width: 700px) {
    order: 1;
    max-height: 40vh;
  }
`;

const LoginContainer = styled.div`
  flex: 0.6;
  padding: 20px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    order: 2;
  }
`;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    let validEmail = validateEmail(email);

    if (!validEmail) {
      setError(true);
      setErrorEmail(true);
    } else {
      router.replace("/home");
    }
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
          onChange={(e) => setEmail(e.target.value)}
          width="50%"
        />
        {error && errorEmail && <Text>O email nao esta no formato certo</Text>}
        <PasswordInput
          id="passwordInput"
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
          width="50%"
        />
        <Button backgroundColor="primary" onClick={handleLogin} width="50%">
          Entrar
        </Button>
      </LoginContainer>
    </FlexContainer>
  );
};

export default Login;
