import React, { useState } from "react";
import styled from "styled-components";
import EmailInput from "components/EmailInput";
import PasswordInput from "components/PasswordInput";
import TextInput from "../TextInput";
import Button from "components/Button";
import router from "next/router";
import Text from "../Text";

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

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [nome, setNome] = useState(null);
  const [passConfirm, setPassConfirm] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    console.log(passConfirm);
    if (password != passConfirm) {
      setHasError(true);
      setErrorMessage("As senhas estão diferentes");
      return;
    }

    const params = {
      email,
      password,
      nome,
    };

    console.log(params);
    router.push("/home");
  };

  return (
    <FlexContainer>
      <LoginContainer>
        <TextInput
          id="textInput"
          label="Nome"
          onChange={(e) => setNome(e.target.value)}
          width="50%"
        />
        <EmailInput
          id="emailInput"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          width="50%"
        />
        <PasswordInput
          id="passwordInput"
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
          width="50%"
        />
        <PasswordInput
          id="password2Input"
          label="Confirmar senha"
          onChange={(e) => setPassConfirm(e.target.value)}
          width="50%"
        />
        {hasError && <Text>{errorMessage}</Text>}
        <Button backgroundColor="primary" onClick={handleLogin} width="50%">
          Cadastrar
        </Button>
      </LoginContainer>

      <ImageContainer>
        <img src="signUpImage.jpg" alt="imagem" />
      </ImageContainer>
    </FlexContainer>
  );
};

export default SignUp;
