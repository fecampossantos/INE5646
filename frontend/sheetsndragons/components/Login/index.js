import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import PasswordInput from "components/PasswordInput";
import Button from "components/Button";
import { useRouter } from "next/router";
import Text from "../Text";

import { validateEmail } from "../../helpes/utils";

import api from "../../api";

import axios from "axios";

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
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError(true);
      setErrorMessage("Nenhum campo pode estar vazio");
      return;
    }

    try {
      // const res = api().auth.signin({username, password})
      const res = await axios.get('http://localhost:8000/api-token-auth', {username, password})
      console.log(res)
      router.replace("/home");
    } catch (e) {
      setError(true);
      setErrorMessage("Usuario ou senha incorretos.");
    }
  };

  return (
    <FlexContainer>
      <ImageContainer>
        <img src="loginImage.jpg" alt="imagem" />
      </ImageContainer>

      <LoginContainer>
        <TextInput
          id="usernameInput"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          width="50%"
        />
        <PasswordInput
          id="passwordInput"
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
          width="50%"
        />
        {error && <Text>{errorMessage}</Text>}
        <Button backgroundColor="primary" onClick={handleLogin} width="50%">
          Entrar
        </Button>
      </LoginContainer>
    </FlexContainer>
  );
};

export default Login;
