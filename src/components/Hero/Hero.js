import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to<br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        'Diffcuilties are come to show us how capable we are'<br/>Vikas Pathak
      </SectionText>
      <Button onclick={()=> window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;