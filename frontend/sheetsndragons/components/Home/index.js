import React from "react";
import styled from "styled-components";

import Text from "components/Text"

const Home = ({ user }) => {

  return (
    <Text>{user.name}</Text>
  )
}

export default Home;