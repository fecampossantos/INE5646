import React from "react";
import styled from "styled-components";

import Text from '../Text'
import Button from '../Button'
import FileInput from "../FileInput";

const Container = styled.div`
  border-radius: 10px;
  background-color: white;
`;

const Header = styled.div`
  width: 100%;
  height: 1.8em;
  background-color: #e4a76e;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  padding: 15px 20px;

  @media(max-width: 500px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const RegisterCharacter = () => {

  const handleDownloadPDF = () => {
    console.log('downloading pdf')
  }

  const handleHowToFill = () => {
    console.log('how to fill pdf')
  }
  return (
    <Container>
      <Header>Cadastrar personagem</Header>
      <Body>
        <LeftContent>
          <Text>Baixar PDF padrao</Text>
          <Button onClick={handleDownloadPDF}>Baixar</Button>
          <Text>Como preencher</Text>
          <Button onClick={handleHowToFill}>Abrir</Button>
        </LeftContent>
        <RightContent>
          <Text>Fazer upload de PDF</Text>
          <FileInput accept={".pdf"} />
        </RightContent>
      </Body>
    </Container>
  );
};

export default RegisterCharacter;
