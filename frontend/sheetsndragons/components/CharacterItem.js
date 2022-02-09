import React from "react";
import styled from "styled-components";

import Text from "./Text";
import Button from "./Button";
import { PenIcon } from "./icons";

const Container = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
  padding: 0 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const EditButton = styled.a`
  background-color: white;
  border: 1px solid black;
  color: black;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
  padding-top: 3px;
`

const CharacterItem = ({ character }) => {
  return (
    <Container>
      <Text>{character.name}</Text>
      <Text>{character.species}</Text>
      <EditButton onClick={() => console.log('clicked on '+character.name)}><PenIcon size={15} /></EditButton>
    </Container>
  );
};

export default CharacterItem;
