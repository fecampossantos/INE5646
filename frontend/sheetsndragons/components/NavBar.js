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
  justify-content: flex-end;

  @media(max-width: 700px){
    height: 3em;
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

const NavItem = styled.div`

`

const NavBar = () => {
  return(
  <Bar>
  <NavItem>
    <Link href={'/'} passHref>
      <a>logout</a>
    </Link>
  </NavItem>
  </Bar>
  );
};

export default NavBar;
