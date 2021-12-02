import React, { useState } from "react";
import styled from "styled-components";
import EmailInput from "components/EmailInput";
import PasswordInput from "components/PasswordInput";
import TextInput from "../TextInput";
import Button from "components/Button";

const FlexContainer = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  background-color: #EFDEC6;
`;

const ImageContainer = styled.div`
  flex: 0.4;
  background-color: grey;
`

const LoginContainer = styled.div`
  flex: 0.6;
  padding: 20px;
  heigth: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [nome, setNome] = useState(null);
  const [passConfirm, setPassConfirm] = useState(null);

  return (
    <FlexContainer>
      <LoginContainer>
        <TextInput id="textInput" label="Nome" onChange={setNome} width="50%"/>
        <EmailInput id="emailInput" label="Email" onChange={setEmail} width="50%"/>
        <PasswordInput id="passwordInput" label="Senha" onChange={setPassword} width="50%"/>
        <PasswordInput id="password2Input" label="Confirmar senha" onChange={setPassConfirm} width="50%"/>
        <Button backgroundColor="primary" onClick={() => { console.log("clicked") }} width="50%">Cadastrar</Button>
      </LoginContainer>

      <ImageContainer>

      </ImageContainer>
    </FlexContainer>
  )
}

export default SignUp;