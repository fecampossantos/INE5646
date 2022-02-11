import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import styled from "styled-components";
import Text from "../Text";

import { GoBackIcon, PenIcon } from '../icons';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 60%;

  background-color: white;
  border-radius: 10px;
  box-shadow: 6px 6px 10px 1px #666;

  margin: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 800px){
    width: 90%;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c6c6c6;
  padding: 10px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  flex-wrap: wrap;
`;

const NameContainer = styled.div``;

const SpeciesContainer = styled.div``;

const GoBackBackContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;

  cursor: pointer;
  box-shadow: 6px 6px 10px 1px #666;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`
const EditButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;

  cursor: pointer;
  box-shadow: 6px 6px 10px 1px #666;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`

const SpecContainer = styled.div`
  text-align: center;
  margin: 5px 0;
  width: 24%;
  @media(max-width: 800px){
    width: 48%;
  }
`

const CharacterPage = ({ character }) => {
  const [editMode, setEditMode] = useState(false);
  const router = useRouter()

  const handleGoBack = () => {
    router.push('/home')
  }
  const handleEdit = () => {
    setEditMode(!editMode)
  }

  return (
    <Container>
    <GoBackBackContainer>
      <a onClick={handleGoBack}><GoBackIcon size={30} color='black' /></a>
    </GoBackBackContainer>

    <EditButtonContainer>
      <a onClick={handleEdit}><PenIcon size={30} color='black' /></a>
    </EditButtonContainer>
      <Card>
        <Header>
          <Text>Personagem</Text>
        </Header>
        <Body>
          <NameContainer>
            <Text>Nome</Text>
            {character.name}
          </NameContainer>
          <SpeciesContainer>
            <Text>Especie</Text>
            {character.species}
          </SpeciesContainer>
        </Body>
      </Card>

      <Card>
        <Header>
          <Text>Caracteristicas de combate</Text>
        </Header>
        <Body>
          {character.specs.map((s) => (
            <SpecContainer key={s.name}>
              <Text>
                {s.name}: {s.value}
              </Text>
            </SpecContainer>
          ))}
        </Body>
      </Card>
    </Container>
  );
};

export default CharacterPage;
