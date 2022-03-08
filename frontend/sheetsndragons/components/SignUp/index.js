import React, { useState } from "react";
import styled from "styled-components";
import EmailInput from "components/EmailInput";
import PasswordInput from "components/PasswordInput";
import TextInput from "../TextInput";
import Button from "components/Button";
import router from "next/router";
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

const SideBySide = styled.div`
  display: flex;
`;

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [username, setUsername] = useState(null);
  const [passConfirm, setPassConfirm] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if(hasError) return 

    if (!name || !surname || !username || !email || !password || !passConfirm) {
      setHasError(true);
      setErrorMessage("Nenhum campo pode estar vazio");
      return;
    }

    let validEmail = validateEmail(email);

    if (!validEmail) {
      setHasError(true);
      setErrorMessage("O email nao esta no formato certo");
      return;
    }

    if (password != passConfirm) {
      setHasError(true);
      setErrorMessage("As senhas estão diferentes");
      return;
    }

    const params = {
      username,
      password,
      password2: passConfirm,
      email,
      first_name: name,
      last_name: surname,
    };

    try {
      // const res = await api().users.createUser(params);
      const res = await axios.post('http://localhost:8000/user/register/', params)
      console.log(res)
      // router.push("/home");
    } catch (e) {
      setHasError(true);
      setErrorMessage("Algo aconteceu de errado. Tente novamente.");
      console.log(e)
    }
  };

  function hasNumber(string) {
    const rslt = string.match(/[0-9]+/gi)
    if(!rslt) return false
    return true
  }

  const handleNameInput = (value) => {
    if (!hasNumber(value)) {
      setName(value);
      setHasError(false);
    } else {
      setHasError(true);
      setErrorMessage("O nome nao pode conter numeros");
    }
  };

  const handleSurnameInput = (value) => {
    if (!hasNumber(value)) {
      setSurname(value);
      setHasError(false);
    } else {
      setHasError(true);
      setErrorMessage("O nome nao pode conter numeros");
    }
  };

  return (
    <FlexContainer>
      <LoginContainer>
        <SideBySide>
          <TextInput
            id="textInput"
            label="Nome"
            onChange={(e) => handleNameInput(e.target.value)}
            width="50%"
          />
          <TextInput
            id="textInput"
            label="Sobrenome"
            onChange={(e) => handleSurnameInput(e.target.value)}
            width="50%"
          />
        </SideBySide>
        <SideBySide>
          <TextInput
            id="textInput"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            width="50%"
          />
          <EmailInput
            id="emailInput"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            width="50%"
          />
        </SideBySide>
        <SideBySide>
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
        </SideBySide>
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
