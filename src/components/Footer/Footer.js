import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Button from '../../styles/GlobalComponents/Button';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = (props) => {
  const [resume, setResume] = useState("")
  const handleResume=()=>{
    setResume("https://drive.google.com/file/d/1eXRhk5kFlaAfn4q7zdmCaUa3mCNcEY2-/view?usp=share_link")
    console.log("Resume")
  }
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:8574259050">857-425-9050</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vi.pathak@protonmail.com">
          vi.pathak@protonmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <a href={resume} style={{color:"white"}}><Button onClick={handleResume}>Resume</Button></a>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Turn your imagination into reality...</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Vikas-Pathak-123">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/vikas-pathak-8499451b0">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/vikas123.vp79/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
