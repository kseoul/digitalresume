import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SocialIconsContainer } from '../Footer/FooterStyles';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem"/><Span>Digital Resume</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIconsContainer>
      <SocialIcons href="https://github.com/kseoul">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/jameshseo">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      </SocialIconsContainer>
    </Div3>
  </Container>
);

export default Header;
