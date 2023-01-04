import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        "Diffculties are come to show us how capable we are"
          Vikas Pathak
        </SectionText>
        <Button onClick={props.handleClick}><a href='https://www.linkedin.com/school/newtonschool/videos/native/urn:li:ugcPost:7008432068162437120/' style={{color:"white"}}>Learn More</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;