import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>

    <Div1>
      <Link href="/">
        <a style={{ display:"flex", alignItems:"center", color:"white", marginBottom:"20px" }}>
          <DiCssdeck size="3rem"/>
          <Span>
            A - 
            <small> Anik</small>
          </Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <NavLink><a href="#projects" style={{color: "rgba(255,255,255,0.75)"}}>Projects</a></NavLink>
      </li>

      <li>
        <NavLink><a href="#tech" style={{color: "rgba(255,255,255,0.75)"}}>Technologies</a></NavLink>
      </li>

      <li>
        <NavLink><a href="#about" style={{color: "rgba(255,255,255,0.75)"}}>About</a></NavLink>
      </li>
    </Div2>

    <Div3>

      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
