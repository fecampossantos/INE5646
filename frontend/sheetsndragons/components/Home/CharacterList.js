import React from "react";
import styled from "styled-components";

import Text from "../Text";
import CharacterItem from "../CharacterItem";

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
  flex-direction: column;
  justify-content: space-around;
  padding: 15px 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const CharacterList = ({ charList }) => {
  return (
    <Container>
      <Header>Personagens Cadastrados</Header>
      <Body>
        {charList.length > 0 ? (
          charList.map((char, i) => <CharacterItem key={i} character={char} />)
        ) : (
          <Text>Voce ainda nao tem personagens cadastrados</Text>
        )}
      </Body>
    </Container>
  );
};

export default CharacterList;
