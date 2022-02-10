import React from "react";
import styled from "styled-components";

import router, { useRouter } from 'next/router'
import Link from 'next/link'

const Bar = styled.div`
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  height: 4em;
  width: 100%;
  background-color: #e4a76e;

  display: flex;
  flex-direction: row;
  padding: 5px 20px;
  align-items: center;

  @media(max-width: 700px){
    height: 3em;
  }
`;

const NavItem = styled.div`

`

const NavBar = () => {

  const handleLogout = () => {
    router.push('/login')
  }
  return(
  <Bar>
  <NavItem>
    <Link href={'/login'} passHref>
      <a>logout</a>
    </Link>
  </NavItem>
  </Bar>
  );
};

export default NavBar;
