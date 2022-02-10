import React from "react";
import styled from "styled-components";

import Text from "./Text";
import Link from "next/link";
import { PenIcon } from "./icons";

const Container = styled.div`
  width: 100%;
  height: 50px;
  ${
    "" /* display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  align-content: center; */
  }
  border-bottom: 1px solid black;
  padding: 0 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const EditButton = styled.div`
  background-color: white;
  border: 1px solid black;
  color: black;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 2rem;
`;

const NameContainer = styled.div`
  width: 33%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const SpeciesContainer = styled.div`
  width: 33%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 33%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const CharacterItem = ({ character }) => {
  return (
    <Container>
      <NameContainer>
        <Text>{character.name}</Text>
      </NameContainer>
      <SpeciesContainer>
        <Text>{character.species}</Text>
      </SpeciesContainer>
      <ButtonContainer>
        <EditButton>
          <Link
            href="character/[charID]"
            as={`/character/${character.id}`}
            passHref
          >
            +
          </Link>
        </EditButton>
      </ButtonContainer>
    </Container>
  );
};

export default CharacterItem;
