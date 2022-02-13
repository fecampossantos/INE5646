import React, { useState } from "react";
import styled from "styled-components";

import Text from "../Text";
import Button from "../Button";
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

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Modal = styled.div`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  z-index: 3;
  position: absolute;
  width: 50%;
  height: auto;
  top: 20%;
  left: 20%;

  background-color: #e4a76e;
  border-radius: 10px;

  @media(max-width: 700px){
    left: 10%;
    width: 80%;

  }
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ModalBody = styled.div`
  width: auto;
  background-color: white;
  border-radius: 10px;
  margin: 20px;

  padding: 20px;
`;

const CloseButton = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const RegisterCharacter = () => {
  const [showModal, setShowModal] = useState(false);

  const handleHowToFill = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Container>
      <Header>Cadastrar personagem</Header>
      <Body>
        <LeftContent>
          <Text>Baixar PDF padrao</Text>
          <Button>
            <a href={"sample_pdf.pdf"} download="PDF" style={{width: '100%'}}>
              Download
            </a>
          </Button>

          <Text>Como preencher</Text>
          <Button onClick={handleHowToFill}>Abrir</Button>
        </LeftContent>
        <RightContent>
          <Text>Fazer upload de PDF</Text>
          <FileInput accept={".pdf"} />
        </RightContent>
      </Body>

      <Modal visible={showModal}>
        <ModalHeader>
          Como preencher
          <CloseButton onClick={closeModal}>X</CloseButton>
        </ModalHeader>

        <ModalBody>
          1. Faça o download do PDF padrão
          <br />
          2. Preencha ele com todas as informações do seu personagem que deseja
          cadastrar
          <br />
          3. Faça upload do pdf no sistema.
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default RegisterCharacter;
