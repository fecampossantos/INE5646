import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar";
import Text from "components/Text";

import SafeArea from '../SafeArea'
import RegisterCharacter from './RegisterCharacter'

const Home = ({ user }) => {
  return (
    <>
      <NavBar />
      <SafeArea>
        <RegisterCharacter />
      </SafeArea>
    </>
  );
};

export default Home;
