import React from "react";
import styled from "styled-components";
import Link from "next/link"

import Text from "components/Text";
import Button from "components/Button";

const Container = styled.div`
  padding: 100px;
`

const Logo = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;

  img {
    width: auto;
    height: 100%;
  }
`

const WelcomeText = styled.section`
  display: flex;
  justify-content: center;
`

const ButtonGroup = styled.section`
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 5px;
`

const ExplanationSection = styled.section`
`

const Main = () => {
  return(
    <Container>
      <Logo>
        <img src="logo.png" alt="logo" />
      </Logo>
      <WelcomeText>
        Cansado/a de ter que levar um monte de papel na sua DnD Night? Seja bem-vindo/a à Sheets'n Dragons!
      </WelcomeText>

      <ButtonGroup>
        <Link href="/signup" passHref><Button>Cadastre-se</Button></Link>
        <Link href="/login" passHref><Button>Fazer Login</Button></Link>
      </ButtonGroup>

      <ExplanationSection>

      </ExplanationSection>
    </Container>
  )
}

export default Main;