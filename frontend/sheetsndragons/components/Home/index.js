import React from "react";
import NavBar from "../NavBar";

import SafeArea from '../SafeArea'
import RegisterCharacter from './RegisterCharacter'
import CharacterList from './CharacterList'

import { charactersList } from "../../helpes/mockData";

const Home = ({ user }) => {
  return (
    <>
      <NavBar />
      <SafeArea>
        <RegisterCharacter />
      </SafeArea>
      <SafeArea>
        <CharacterList charList={charactersList}/>
      </SafeArea>
    </>
  );
};

export default Home;
