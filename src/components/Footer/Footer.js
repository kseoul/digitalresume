import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact Me</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/jamesseo">LinkedIn</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>Engineering solutions for your digital transformation journey</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/kseoul">
        <AiFillGithub size="3rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/jamesseo">
          <AiFillLinkedin size="3rem"></AiFillLinkedin>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
