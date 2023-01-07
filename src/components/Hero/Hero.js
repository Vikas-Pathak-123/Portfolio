import React, { useState } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  const [learnMore, setLearMore] = useState("")
  const handleLearnmore=()=>{
    setLearMore("https://www.linkedin.com/posts/newtonschool_newtonschool-humansofnewton-activity-7008432447218475008-eypX?utm_source=share&utm_medium=member_desktop")
    console.log("LearnMore")
  }
  return(
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        "Difficulties are come to show us how capable we are"
          Vikas Pathak
        </SectionText>
        <a href={learnMore} style={{color:"white"}}><Button onClick={handleLearnmore}>Learn More</Button></a>
      </LeftSection>
    </Section>
  </>
);
}
export default Hero;